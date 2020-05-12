import React from 'react';
import { ExampleLinks } from '../../src/dummy/example-links';
import { PreJson } from '../../src/dummy/pre-json';
import { PageType } from '../../src/next-types';
import { TypedRouteParam, TypedRoutes } from '../../src/typed-routes';

type UrlParam = /* in path */ TypedRouteParam<typeof TypedRoutes.posts.show> & /* in query */ { timestamp: string };

interface PageProps {
  postId: number | string;
  postContent: string;
}

const PostsShowPage: PageType<UrlParam, PageProps> = (props) => (
  <div>
    <pre>{__filename}</pre>
    <ExampleLinks />
    <hr />
    <h4>props:</h4>
    <PreJson value={props} />
    <h1>title: {props.postId}</h1>
    <code>{props.postContent}</code>
  </div>
);

PostsShowPage.getInitialProps = async (ctx) => {
  return { postId: ctx.query.postId, postContent: `content for pageId=${ctx.query.postId}` };
};

export default PostsShowPage;
