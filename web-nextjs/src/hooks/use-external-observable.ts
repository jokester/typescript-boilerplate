import { Observable } from 'rxjs';
import {useDeferredValue, useEffect, useRef, useState, useSyncExternalStore, useTransition} from 'react';

export function useExternalObservable<T>(observable: Observable<T>, defaultValue: T): T {
  const value = useRef<T>(defaultValue);
  const listener = useRef<null | (() => void)>(null);
  useEffect(() => {
    const s = observable.subscribe((next) => {
      value.current = next;
      listener.current?.();
    });

    return () => s.unsubscribe();
  }, [observable]);

  return useSyncExternalStore<T>(
    (onStoreChange) => {
      listener.current = onStoreChange;
      return () => (listener.current = null);
    },
    () => value.current,
    () => defaultValue,
  );
}
