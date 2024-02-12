import { autorun, IReactionDisposer } from 'mobx';
import { useRef, useState } from 'react';

interface MobxSubscription {
  disposer: IReactionDisposer;
}

export function useReactive<ViewModel, Derived>(init: ViewModel, derive: (v: ViewModel) => Derived): Derived {
  const [state, setState] = useState(0);

  const derivedValue = useRef<Derived>(null!);
  const sub = useRef<MobxSubscription>(null!);

  if (typeof window !== 'object') {
    // fast path for SSR:
    return derive(init);
  }

  if (!sub.current) {
    if (typeof window === 'object') {
    }
    const disposer = autorun(() => {
      derivedValue.current = derive(init);
      setState((val) => val++);
    });
    sub.current = { disposer };
  }

  return derivedValue.current;
}
