import { ExampleLinks } from '../../src/dummy/example-links';
import { PreJson } from '../../src/dummy/pre-json';
import { PageType } from '../../src/next-types';
import { TypedRouteParam, TypedRoutes } from '../../src/typed-routes';

const PostsIndexPage: PageType<TypedRouteParam<typeof TypedRoutes.posts.index>> = props => {
  return (
    <>
      <ExampleLinks />
      <pre>{__filename}</pre>
      <PreJson value={props} />
    </>
  );
};

// IndexPage.getInitialProps = async ctx => {};

export default PostsIndexPage;
