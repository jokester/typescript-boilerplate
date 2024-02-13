import { z } from 'zod';
import { t } from './_base';
import vision from '@google-cloud/vision';
import { createDebugLogger } from '../../shared/logger';
import path from 'node:path';
import fsp from 'node:fs/promises';
import { TRPCError } from '@trpc/server';
import { serverRuntimeConfig } from '../runtime-config';

const publicDir = path.join(serverRuntimeConfig.projectRoot, 'public');

async function ocrText(bytes: Buffer) {
  const client = new vision.ImageAnnotatorClient();

  // TEXT_DETECTION detects and extracts text from any image
  const [result] = await client.textDetection(bytes);
  return result;
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

  extractText: t.procedure.input(z.object({ imgBytes: z.string() })).query(async ({ input }) => {
    const ocrTextResult = await ocrText(Buffer.from(input.imgBytes, 'base64'));

    return {
      textAnnotations: (ocrTextResult.textAnnotations ?? []).map((i) => i),
      fullTextAnnotations: ocrTextResult.fullTextAnnotation && {},
    };
  }),

  translateBalloon: t.procedure.input(z.object({ text: z.string(), targetLang: z.string() })).query(({ input }) => {}),
});
