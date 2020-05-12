import React from 'react';
import { ExampleLinks } from '../src/dummy/example-links';
import { PreJson } from '../src/dummy/pre-json';
import { PageType } from '../src/next-types';
import { buildEnv, inServer, isDevBuild } from '../src/config/build-env';

const IndexPage: PageType = (props) => {
  console.log('buildEnv', buildEnv, inServer, isDevBuild);
  return (
    <>
      <ExampleLinks />
      <PreJson value={props} />
    </>
  );
};

// IndexPage.getInitialProps = async ctx => ({});

export default IndexPage;
