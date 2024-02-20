import { Button, FileInput } from '@blueprintjs/core';
import { useState } from 'react';
import { wait } from '@jokester/ts-commonutil/lib/concurrency/timing';
import clsx from 'clsx';
import { useCounter } from '@chakra-ui/react';
import { createMoeflowProjectZip } from './moeflow-packager';
import { ResourcePool } from '@jokester/ts-commonutil/lib/concurrency/resource-pool';
import { translateImgFile } from './manga-translator';
import { TRPCError } from '@trpc/server';

export function FilePicker(props: { disabled?: boolean; onFilesLoaded?(files: File[]): void }) {
  return (
    <div>
      <div className="text-center">
        <FileInput
          disabled={props.disabled}
          text="选择图片文件..."
          inputProps={{ accept: 'image/*,*.png,*.jpg', multiple: true }}
          onChange={(ev) => {
            const input = ev.target as HTMLInputElement;
            if (input.files?.length) {
              if (input.files.length >= 5) {
                alert('一次最多只能上传5张图片');
                return;
              }
              props.onFilesLoaded?.(Array.from(input.files));
            }
          }}
        />
      </div>
    </div>
  );
}

export function Translator({ onBuilt, files }: { onBuilt?(f: File): void; disabled?: boolean; files?: File[] }) {
  const [working, setWorking] = useState(false);

  const onStart = async () => {
    if (working || !files) {
      return;
    }

    setWorking(true);

    await wait(1e3);
    const built = await build(files);
    onBuilt?.(built);
    setWorking(false);
  };

  return (
    <div>
      {/* TODO: maybe files */}
      <div className="text-center">
        <Button
          type="button"
          disabled={!files}
          loading={working}
          onClick={onStart}
          className={clsx('bp5-intent-primary')}
        >
          开始翻译
        </Button>
      </div>
    </div>
  );
}

export function Downloader({ built }: { built?: File }) {
  const disabled = !built;
  const onDownload = () => {
    if (!built) return;

    const filename = built.name;
    const url = URL.createObjectURL(built);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="text-center">
      <Button disabled={disabled} onClick={onDownload}>
        下载
      </Button>
    </div>
  );
}

export async function build(files: File[]): Promise<File> {
  const filename = `moeflow-project-${Date.now()}-${files[0]!.name}.zip`;

  const throttler = ResourcePool.multiple([1, 2, 3]);

  const translated = await Promise.all(files.map((f) => throttler.use(() => translateImgFile(f)))).catch((e) => {
    if (e instanceof TRPCError) {
      alert(`翻译失败: ${e.code} ${e.message}`);
    }
    throw e;
  });

  const bytes = await createMoeflowProjectZip(
    {
      name: `${files[0]!.name}`,
      intro: `这是由<萌机翻>生成的项目. https://moeflow-custom.ihate.work/moeflow`,
      default_role: 'supporter',
      allow_apply_type: 3,
      application_check_type: 1,
      is_need_check_application: true,
      source_language: 'ja',
      output_language: 'zh-TW',
    },
    translated,
  );
  return new File([bytes], filename);
}

export function MoeflowPreTransWorkarea() {
  const counter = useCounter();
  const [built, setBuilt] = useState<null | File>(null);
  const [files, setFiles] = useState<null | File[]>(null);

  const onReset = () => {
    counter.increment();
    setFiles(null);
    setBuilt(null);
  };

  return (
    <div className="space-y-8 max-w-screen-sm mx-auto" key={counter.value}>
      <div className="text-right">
        <Button disabled={!files} className={clsx('text-center bp5-intent-danger')} onClick={onReset}>
          重新开始
        </Button>
      </div>
      <FilePicker disabled={!!files} onFilesLoaded={setFiles} />
      <Translator disabled={!files} files={files ?? undefined} onBuilt={setBuilt} />
      <Downloader built={built ?? undefined} />
    </div>
  );
}
