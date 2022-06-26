import { Observable } from 'rxjs';
import { createEmitter, FastEvent } from './fast-emitting';
import { useCounter, useObservable } from 'react-use';
import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import useConstant from 'use-constant';
import { useFps } from '../../hooks/use-fps';

export const ViewerDemo: React.FC = () => {
  const o = useConstant(() => createEmitter(10000, 0.01e3));
  const fps = useFps(100);

  const [plainCount, plainCounter] = useCounter(0, 100, 0);
  const [externalCount, externalCounter] = useCounter(0, 100, 0);

  const children: React.ReactElement[] = [];
  for (let i = 0; i < plainCount; i++) {
    children.push(
      <div key={`plain-${i}`}>
        <PlainViewer source={o} />
      </div>,
    );
  }
  for (let i = 0; i < externalCount; i++) {
    children.push(
      <div key={`external-${i}`}>
        <ExternalStoreViewer source={o} />
      </div>,
    );
  }

  return (
    <div>
      <div>{fps.toFixed(2)} fps</div>
      <div className="space-x-2">
        <button type="button" className="border" onClick={() => plainCounter.dec()}>
          - Plain Viewer
        </button>
        {plainCount}
        <button type="button" className="border" onClick={() => plainCounter.inc()}>
          + Plain Viewer
        </button>
      </div>
      <hr />
      <div className="space-x-2">
        <button type="button" className="border" onClick={() => externalCounter.dec()}>
          - External Viewer
        </button>
        {externalCount}
        <button type="button" className="border" onClick={() => externalCounter.inc()}>
          + External Viewer
        </button>
      </div>
      <hr />
      <div>{children}</div>
    </div>
  );
};

export const PlainViewer: React.FC<{ source: Observable<FastEvent> }> = (props) => {
  const f = useObservable(props.source, null);

  console.debug('PlainViewer rendering', f);

  useEffect(() => {
    console.debug('PlainViewer mounted');
    return () => {
      console.debug('PlainViewer unmounted');
    };
  }, []);

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
  useEffect(() => {
    console.debug('ExternalStoreViewer mounted');
    return () => {
      console.debug('ExternalStoreViewer unmounted');
    };
  }, []);

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
