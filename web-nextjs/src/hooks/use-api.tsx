import type { DefaultApi } from '../generated/ts-fetch';
import { inServer } from '../config/build-env';
import { Never } from '@jokester/ts-commonutil/lib/concurrency/timing';
import { useEffect, useState } from 'react';
import { PromiseResult, usePromised } from '@jokester/ts-commonutil/lib/react/hook/use-promised';
import { Configuration } from '../generated/ts-fetch';

const apiP: Promise<DefaultApi> = inServer
  ? Never
  : import('../generated/ts-fetch').then(
      (_) =>
        new _.DefaultApi(
          new Configuration({
            basePath: `http://127.0.0.1:8080`,
          }),
        ),
    );

export function getApiClient() {
  return apiP;
}

export function useApiResult<T>(
  task: (api: DefaultApi) => Promise<T>,
  deps?: unknown[],
): readonly [PromiseResult<T>, () => void] {
  const [resultP, setResultP] = useState<Promise<T>>(Never);
  const [count, setCounter] = useState(1);

  useEffect(
    () => {
      let effective = true;

      apiP.then((api) => {
        if (effective) setResultP(task(api));
      });

      return () => {
        effective = false;
      };
    },
    deps ? [count, ...deps] : [count],
  );

  return [usePromised(resultP), () => setCounter((_) => _ + 1)] as const;
}
