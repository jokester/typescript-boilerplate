import React from 'react';
import Head from 'next/head';

export const DefaultMeta: React.FC<{ title?: string }> = (props) => {
  return (
    <Head>
      <title key="head-title">{props.title ?? 'untitled'}</title>
    </Head>
  );
};
