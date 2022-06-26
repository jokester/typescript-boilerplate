import { useState } from 'react';
import { useAsyncEffect } from '@jokester/ts-commonutil/lib/react/hook/use-async-effect';

export function useFps(windowSize = 30): number {
  const [fps, setFps] = useState(0);

  useAsyncEffect(
    async (inEffect) => {
      const times: number[] = [];

      const onRaf = () => {
        if (inEffect.current) {
          const t = Date.now();
          times.push(t);

          if (windowSize > 0 && times.length > windowSize) {
            const t0 = times.shift()!;
            setFps((1e3 * windowSize) / (t - t0));
          }

          requestAnimationFrame(onRaf);
        }
      };

      requestAnimationFrame(onRaf);
    },
    [windowSize],
  );

  return fps;
}
