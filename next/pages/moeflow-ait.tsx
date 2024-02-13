import { useState } from 'react';
import { trpcClient } from '../src/api/trpc-client';

function FileList(props: { path: string; onFileSelected: (path: string) => void }) {
  const files = trpcClient.moeflow.listImages.useQuery({ dir: props.path });
  if (files.status !== 'success') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>File List</h2>
      <ul>
        {files.data.files.map((f) => (
          <li key={f} onClick={() => props.onFileSelected(f)}>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImgPreview(props: { path: string }) {
  return <img src={props.path} />;
}

function MoeflowAssistedTranslatorPage() {
  const [imgPath, setImagPath] = useState('');
  return (
    <div>
      <h1>Moeflow Assisted Translator</h1>
      <FileList path="demo-images" onFileSelected={setImagPath} />
    </div>
  );
}

export default MoeflowAssistedTranslatorPage;
