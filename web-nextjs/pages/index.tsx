import React from 'react';
import { isDevBuild } from '../src/config/build-env';
import { NextPage } from 'next';
import { DefaultMeta } from '../src/demo/components/default-meta';

const IndexPage: NextPage = (props) => {
  return (
    <>
      <DefaultMeta />
      <ExampleLinks />
      <PreJson value={props} />
    </>
  );
};

// IndexPage.getInitialProps = async ctx => ({});

export default IndexPage;
