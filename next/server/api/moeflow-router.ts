import { z } from 'zod';
import { t } from './_base';
import vision, { type v1 } from '@google-cloud/vision';
import { createDebugLogger } from '../../shared/logger';
import path from 'node:path';
import fsp from 'node:fs/promises';
import { TRPCError } from '@trpc/server';
import { serverRuntimeConfig } from '../runtime-config';
import openai from 'openai';

const publicDir = path.join(serverRuntimeConfig.projectRoot, 'public');

async function ocrText(bytes: Buffer) {
  const client = new vision.ImageAnnotatorClient();

  // TEXT_DETECTION detects and extracts text from any image
  const [result] = await client.textDetection(bytes);
  return {
    textAnnotations: (result.textAnnotations ?? []).map((i) => i),
    fullTextAnnotations: result.fullTextAnnotation && {},
  };
}

type OcrResult = Awaited<ReturnType<typeof ocrText>>;

function orgText(
  annotations: OcrResult,
): { text: string; leftTop: { x: number; y: number }; rightBottom: { x: number; y: number } }[] {
  return annotations.textAnnotations.map((i) => {
    const aabb: { x: number; y: number }[] = i.boundingPoly?.vertices ?? ([] as any);

    const minX = Math.min(...aabb.map((v) => v.x));
    const maxX = Math.max(...aabb.map((v) => v.x));
    const minY = Math.min(...aabb.map((v) => v.y));
    const maxY = Math.max(...aabb.map((v) => v.y));

    return {
      text: i.description!,
      leftTop: { x: minX, y: minY },
      rightBottom: { x: maxX, y: maxY },
    };
  });
}

async function aiRebuild(annotations: OcrResult): Promise<{ x: number; y: number; text: string }[]> {
  const blocks = orgText(annotations);
  const prompt = `
これは漫画ページをOCRにかけたものから、吹き出しごとに文言を抽出するための処理です。
OCRで抽出されたテキストは以下の形式に従います: (x座標, y座標): {OCRで抽出されたテキスト} 。入力テキストは ### の後に続くものとします。
漫画の文字方向と配置を考慮しつつ、テキストの内容と座標を確認しながら、吹き出しの境界を検出し、吹き出しごとのテキストを抽出します。抽出されたテキストは以下のJSON配列で返してください：
{
    "x": number, // 吹き出しのx座標
    "y": number, // 吹き出しのy座標
    "text": string // 吹き出しの内容
}

###

${blocks.map((b) => `(${b.leftTop.x}, ${b.leftTop.y}): {${b.text}}`).join('\n')}

  `.trim();

  const client = new openai.OpenAI({ apiKey: serverRuntimeConfig.openaiApiKey });

  const completion = await client.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    // model: `gpt-4`,
    model: 'gpt-3.5-turbo-0125',
  });

  debugLogger('completion', completion);

  return JSON.parse(completion.choices[0]?.message!.content!);
}

async function openaiTranslate(texts: string[]): Promise<string[]> {
  const prompt = `
你是一位资深漫画翻译, 请将以下日文文本翻译成繁体中文. 请注意, 本文本是从漫画中提取的, 有可能包含一些特殊的用语和表达, 请尽量保持原意.
输入文本以JSON string[] 的形式给出. 请将请将翻译结果按照原文本的顺序, 同样以JSON string[] 的形式返回.

${JSON.stringify(texts)}
    `;
  const client = new openai.OpenAI({ apiKey: serverRuntimeConfig.openaiApiKey });

  const completion = await client.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: `gpt-4-0125-preview`,
    // model: 'gpt-3.5-turbo-0125',
  });
  return JSON.parse(completion.choices[0]?.message!.content!);
}

async function ocrDocumentText(bytes: Buffer) {
  const client = new vision.ImageAnnotatorClient();

  // DOCUMENT_TEXT_DETECTION: optimized for dense text and documents
  const [result] = await client.documentTextDetection(bytes);
  return result;
}

const debugLogger = createDebugLogger(__filename);

export const moeflowRouter = t.router({
  listImages: t.procedure
    .input(
      z.object({
        dir: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const dir = path.join(publicDir, input.dir);
      if (!dir.startsWith(publicDir)) {
        throw new TRPCError({ message: 'Invalid directory', code: 'FORBIDDEN' });
      }

      const files = await fsp.readdir(dir, { withFileTypes: true });

      debugLogger('files', files);

      return {
        /**
         * List of files in the directory, relative to site root
         */
        files: files
          .filter((f) => f.isFile() && ['.jpg', '.jpeg', '.png'].includes(path.extname(f.name)))
          .map((f) => '/' + path.join(input.dir, f.name)),
      };
    }),

  extractText: t.procedure.input(z.object({ imgBytes: z.string() })).mutation(async ({ input }) => {
    const fullpath = path.join(publicDir, input.file);
    if (!fullpath.startsWith(publicDir)) {
      throw new TRPCError({ message: 'Invalid directory', code: 'FORBIDDEN' });
    }
    const ocrTextResult = await ocrText(Buffer.from(input.imgBytes, 'base64'));

    const bytes = await fsp.readFile(fullpath);
    const ocrTextResult = await ocrText(bytes);

    const rebuilt = await aiRebuild(ocrTextResult);
    const translated = await openaiTranslate(rebuilt.map((b) => b.text));
    return {
      ...ocrTextResult,
      blocks: orgText(ocrTextResult),
      rebuilt,
      translated,
    };
  }),

  translateBalloon: t.procedure.input(z.object({ text: z.string(), targetLang: z.string() })).query(({ input }) => {}),
});
