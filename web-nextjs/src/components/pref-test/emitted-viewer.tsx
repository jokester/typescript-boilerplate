import { Observable } from 'rxjs';
import { createEmitter, FastEvent } from './fast-emitting';
import { useCounter, useObservable } from 'react-use';
import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import useConstant from 'use-constant';
import { useFps } from '../../hooks/use-fps';
import {useExternalObservable, useTransitionObservable} from "../../hooks/use-external-observable";

export const ViewerDemo: React.FC = () => {
  const o = useConstant(() => createEmitter(10000, 0.1e3));
  const fps = useFps(100);

  const [plainCount, plainCounter] = useCounter(0, 100, 0);
  const [externalCount, externalCounter] = useCounter(0, 100, 0);

  const children: React.ReactElement[] = [];
  for (let i = 0; i < plainCount; i++) {
    children.push(
      <div key={`plain-${i}`}>
        <PlainViewer source={o}>{`PlainViewer #${i + 1} `}</PlainViewer>
      </div>,
    );
  }
  for (let i = 0; i < externalCount; i++) {
    children.push(
      <div key={`external-${i}`}>
          <ExternalStoreViewer source={o} >{`ExternalStoreViewer #${i + 1} `}</ExternalStoreViewer>
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

export const PlainViewer: React.FC<{ source: Observable<FastEvent>; children?: string }> = (props) => {
  const f = useTransitionObservable(props.source, null);

  console.debug('PlainViewer rendering', props.children, f);

  useEffect(() => {
    console.debug('PlainViewer mounted');
    return () => {
      console.debug('PlainViewer unmounted');
    };
  }, []);

  return (
    f && (
      <div>
        {props.children}
        <span>batchNum = {f.batchNum}</span>
        <span>count = {f.count}</span>
      </div>
    )
  );
};

export const ExternalStoreViewer: React.FC<{ source: Observable<FastEvent>; children?: string }> = (props) => {
  useEffect(() => {
    console.debug('ExternalStoreViewer mounted');
    return () => {
      console.debug('ExternalStoreViewer unmounted');
    };
  }, []);

  const f = useExternalObservable(props.source, null)

  return (
    f && (
      <div>
        {props.children}
        <span>batchNum = {f.batchNum}</span>
        <span>count = {f.count}</span>
      </div>
    )
  );
};
