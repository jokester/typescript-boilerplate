import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class CustomDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
