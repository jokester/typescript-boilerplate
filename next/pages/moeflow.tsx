import { MoeflowPreTransWorkarea } from '../src/moeflow-auto-translate/moetrans';

function MoeflowPreTransPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-xl">moeflow pre-translator / 萌翻实验版：机器翻译</h1>
      <h2 className="text-center">给萌翻加入翻译辅助功能的实验</h2>
      <hr className="my-4" />
      <MoeflowPreTransWorkarea />
    </div>
  );
}

export default MoeflowPreTransPage;
