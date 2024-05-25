import React, { PropsWithChildren } from 'react';
import Head from 'next/head';

export const DefaultMeta: React.FC<PropsWithChildren<{title?: string}>> = (props) => {
  return (
    <Head>
      <title key='head-title'>{props.title ?? 'untitled'}</title>
      {props.children}
    </Head>
  );
};
