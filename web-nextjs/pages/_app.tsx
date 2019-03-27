import React from 'react';
import NextApp, { Container } from 'next/app';
import { AppGetInitialProps, BaseAppProps, inServer } from '../src/next-types';

interface AppProps extends BaseAppProps {}

export default class extends NextApp<AppProps> {
  static getInitialProps: AppGetInitialProps<AppProps> = async appCtx => {
    const superInitialProps = await NextApp.getInitialProps(appCtx);

    // MUST NOT use appCtx.router: see https://github.com/zeit/next.js/issues/5311
    const { pathname, asPath, query } = appCtx.ctx;
    return {
      ...superInitialProps,
      pageProps: {
        ...superInitialProps.pageProps,
        url: {
          pathname,
          asPath,
          query,
        },
      },
    };
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
