import { Observable } from 'rxjs';
import { createEmitter, FastEvent } from './fast-emitting';
import { useObservable } from 'react-use';
import React, { useRef, useSyncExternalStore } from 'react';
import useConstant from 'use-constant';

export const ViewerDemo: React.FC = () => {
  const o = useConstant(() => createEmitter(10, 1e3));

  return (
    <div>
      <PlainViewer source={o} />
      <ExternalStoreViewer source={o} />
    </div>
  );
};

export const PlainViewer: React.FC<{ source: Observable<FastEvent> }> = (props) => {
  const f = useObservable(props.source, null);

  console.debug('PlainViewer rendering', f);

  return (
    f && (
      <div>
        PlainViewer:
        <span>batchNum = {f.batchNum}</span>
        <span>count = {f.count}</span>
      </div>
    )
  );
};

export const ExternalStoreViewer: React.FC<{ source: Observable<FastEvent> }> = (props) => {
  const lastEvent = useRef<null | FastEvent>(null);
  const f = useSyncExternalStore<null | FastEvent>(
    (reactSubscriber) => {
      const s = props.source.subscribe((v) => {
        lastEvent.current = v;
        reactSubscriber();
      });
      return () => s.unsubscribe();
    },
    () => lastEvent.current,
    () => null,
  );

  return (
    f && (
      <div>
        ExternalStoreViewer
        <span>batchNum = {f.batchNum}</span>
        <span>count = {f.count}</span>
      </div>
    )
  );
};
