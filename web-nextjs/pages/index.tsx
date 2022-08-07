import React from 'react';
import { NextPage } from 'next';
import { ExampleLinks } from '../src/dummy/example-links';
import { PreJson } from '../src/dummy/pre-json';
import { buildEnv, inServer, isDevBuild } from '../src/config/build-config';

const IndexPage: NextPage = (props) => {
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
