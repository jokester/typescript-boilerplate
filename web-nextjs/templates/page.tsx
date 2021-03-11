import * as React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

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

const UnnamedPage: NextPage<PageProps> = (props) => {
  const query = useRouter().query as UrlParam;
  console.debug('query', query);
  console.debug('props', props);
  return (
    <>
      <h2>UnnamedPage in {__filename}</h2>
    </>
  );
};

UnnamedPage.getInitialProps = async (ctx) => ({
  renderedAt: Date.now(),
  renderedBy: ctx.req ? 'server' : 'browser',
});

export default UnnamedPage;
