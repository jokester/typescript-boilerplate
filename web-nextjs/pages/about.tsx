import { PreJson } from '../src/dummy/pre-json';
import { PageType } from '../src/next-types';
import { ExampleLinks } from '../src/dummy/example-links';
import * as React from 'react';

/**
 * URL params from route (path) and query
 */
interface UrlParam {
  x?: string;
}

/**
 *
 */
interface PageProps {
  renderedAt: number;
  renderedBy: string;
}

const UnnamedPage: PageType<UrlParam, PageProps> = (props) => {
  return (
    <>
      <ExampleLinks />
      <h2>AboutPage in {__filename}</h2>
      <PreJson value={props} />
    </>
  );
};

UnnamedPage.getInitialProps = async (ctx) => ({
  renderedAt: Date.now(),
  renderedBy: ctx.req ? 'server' : 'browser',
});

export default UnnamedPage;
