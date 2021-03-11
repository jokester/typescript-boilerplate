import Head from 'next/head';

import React from 'react';
import { useBabylonDepsPreload } from '../../babylon-react/init-babylon';

export const DefaultMeta: React.FC = () => {
  useBabylonDepsPreload();
  return (
    <Head>
      <link
        rel="stylesheet"
        key="css-tailwindcss"
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/tailwind.min.css"
        integrity="sha256-KwBcfPYYUP4pXG0aiIA8nTSuAqRzRWdtoHQktxvMVf4="
        crossOrigin="anonymous"
      />
      <meta
        key="meta-viewport"
        name="viewport"
        content="width=device-width, initial-scale=1,maximum-scale=1.5,minimum-scale=1"
      />
    </Head>
  );
};
