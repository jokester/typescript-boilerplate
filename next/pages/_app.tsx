import React from 'react';
import type { AppType } from 'next/app';
import '../src/app.scss';
import { DefaultMeta } from '../src/components/meta/default-meta';
import Head from 'next/head';
import { trpcClient } from '../src/api/trpc-client';

interface PageProps {}

const CustomApp: AppType<PageProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta
          key="meta-viewport"
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1.5,minimum-scale=1"
        />
      </Head>
      <DefaultMeta />
      <Component {...pageProps} />
    </>
  );
};

// CustomApp.getInitialProps = App.getInitialProps;

export default trpcClient.withTRPC(CustomApp);
