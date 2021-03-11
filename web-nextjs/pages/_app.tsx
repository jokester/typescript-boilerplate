import React from 'react';
import App from 'next/app';
import '../src/app.scss';

export default class extends App {
  static getInitialProps = App.getInitialProps;

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    );
  }
}
