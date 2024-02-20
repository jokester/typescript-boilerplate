import { LPFile } from './moeflow-packager';
import { trpcClient, trpcClient$ } from '../api/trpc-client';

export async function translate(imgFile: File): Promise<LPFile> {
  const text = await trpcClient$.moeflow.extractText.mutate({
    imgBytes: await toBase64(imgFile),
  });
}

function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
}
