import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

const defaultMetaTags = [] as const;
export default function CustomDocument(): React.ReactElement {
  return (
    <Html>
      <Head>{defaultMetaTags} </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
