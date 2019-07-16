import React from 'react';
import App, { Container } from 'next/app';

export default class extends App {
  static getInitialProps: typeof App.getInitialProps = async appCtx => {
    const superInitialProps = await App.getInitialProps(appCtx);

    // MUST NOT use appCtx.router: see https://github.com/zeit/next.js/issues/5311
    const { pathname, asPath, query } = appCtx.ctx;
    const route = { pathname, asPath, query };
    return {
      ...superInitialProps,
      pageProps: {
        ...superInitialProps.pageProps,
        route,
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
