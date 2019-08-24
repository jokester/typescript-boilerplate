import React from 'react';
import { ExampleLinks } from '../src/dummy/example-links';
import { PreJson } from '../src/dummy/pre-json';
import { PageType } from '../src/next-types';

const IndexPage: PageType = props => {
  return (
    <>
      <ExampleLinks />
      <PreJson value={props} />
    </>
  );
};

// IndexPage.getInitialProps = async ctx => ({});

export default IndexPage;
