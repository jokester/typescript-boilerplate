/**
 * see moeflow-backend "TeamProjectImportAPI"
 */
interface LPLabel {
  x: number; // normalized
  y: number; // normalized
  position_type: number; // int , always 1 ?
  translation: string; // singleline
}

interface LPFile {
  file_name: string; // img filename (basename)
  labels: LPLabel[];
}

function serializeIntoLabelplusFormat(files: LPFile[]): string[] {
  return files.flatMap((file) => [
    `>>>>[${file.file_name}]<<<<`,
    ...file.labels.flatMap((l, labelIndex) => [
      `----[${labelIndex}]----[${l.x},${l.y},${l.position_type}]`,
      l.translation,
    ]),
  ]);
}

type LANG_CODE = 'ja' | 'en' | 'zh-CN' | 'zh-TW';

interface MoeflowProjectMeta {
  name: string;
  intro: string;
  default_role: 'supporter';
  allow_apply_type: 3;
  application_check_type: 1;
  is_need_check_application: false;
  // create_time: string;
  // edit_time: string;
  source_language: 'ja';
  // target_languages: LANG_CODE[];
  // output_id: string;
  output_language: LANG_CODE;
}

interface MoeflowImageFile {
  lp: LPFile;
  image: Blob;
}

export async function createMoeflowProjectZip(meta: MoeflowProjectMeta, files: MoeflowImageFile[]): Promise<Blob> {
  const translationsTxt = serializeIntoLabelplusFormat(files.map((f) => f.lp)).join('\n') + '\n';
  throw 'todo';
}
