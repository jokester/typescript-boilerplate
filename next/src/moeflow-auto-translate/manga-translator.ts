import { MoeflowImageFile } from './moeflow-packager';
import { trpcClient$ } from '../api/trpc-client';
import { measureImgSize } from '@jokester/ts-commonutil/lib/frontend/measure-img';

export async function translateImgFile(imgFile: File): Promise<MoeflowImageFile> {
  const imgBytes = await toBase64(imgFile);
  const text = await trpcClient$.moeflow.extractText.mutate({
    imgBytes,
  });
  const dimension = await measureImgSize(imgFile);

  return {
    lp: {
      file_name: imgFile.name,
      labels: text.translated.map((t) => ({
        x: t.x / dimension.width,
        y: t.y / dimension.height,
        position_type: 1,
        translation: `${t.text} // ${t.translated}`,
      })),
    },
    image: imgFile,
  };
}

function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}
