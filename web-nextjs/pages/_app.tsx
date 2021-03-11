import React from 'react';
import App, { AppProps } from 'next/app';
import '../src/app.scss';
import { DefaultMeta } from '../src/components/meta/default-meta';

const CustomApp: React.FC<AppProps> & Partial<Pick<typeof App, 'getInitialProps'>> = (props) => {
  const { Component, pageProps } = props;
  return (
    <React.StrictMode>
      <DefaultMeta />
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

CustomApp.getInitialProps = App.getInitialProps;

export default CustomApp;
