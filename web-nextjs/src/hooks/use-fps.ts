import { useState } from 'react';
import { useAsyncEffect } from '@jokester/ts-commonutil/lib/react/hook/use-async-effect';

export function useFps(windowSize = 30): number {
  const [fps, setFps] = useState(0);

  useAsyncEffect(async (inEffect) => {}, [windowSize]);

  return fps;
}
