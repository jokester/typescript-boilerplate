import { ExampleLinks } from '../../src/dummy/example-links';
import { PreJson } from '../../src/dummy/pre-json';
import { TypedRouteParam, TypedRoutes } from '../../src/config/typed-routes';
import * as React from 'react';
import { NextPage } from 'next';

const PostsIndexPage: NextPage<TypedRouteParam<typeof TypedRoutes.posts.index>> = (props) => {
  return (
    <>
      <ExampleLinks />
      <pre>{__filename}</pre>
      <h1>post list</h1>
      <PreJson value={props} />
    </>
  );
};

// IndexPage.getInitialProps = async ctx => {};

export default PostsIndexPage;
