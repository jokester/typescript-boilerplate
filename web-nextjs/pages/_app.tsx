import React from 'react';
import App from 'next/app';
import '../src/app.scss';

export default class extends App {
  static getInitialProps = App.getInitialProps;

  render() {
    const { Component } = this.props;

    const { pathname, asPath, query } = this.props.router;
    const pageProps: {} = {
      ...this.props.pageProps,
      route: { pathname, asPath, query },
    };

    return (
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    );
  }
}
