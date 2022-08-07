import React from 'react';
import { NextPage } from 'next';
import { ExampleLinks } from '../src/dummy/example-links';
import { PreJson } from '../src/dummy/pre-json';

const IndexPage: NextPage = (props) => {
  return (
    <>
      <ExampleLinks />
      <PreJson value={props} />
    </>
  );
};

// IndexPage.getInitialProps = async ctx => ({});

export default IndexPage;
