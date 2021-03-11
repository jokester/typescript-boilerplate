import { PreJson } from '../src/dummy/pre-json';
import { ExampleLinks } from '../src/dummy/example-links';
import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

/**
 *
 */
interface PageProps {
  renderedAt: number;
  renderedBy: string;
}

const AboutPage: NextPage<PageProps> = (props) => {
  const query = useRouter().query;
  return (
    <>
      <ExampleLinks />
      <h2>AboutPage in {__filename}</h2>
      <PreJson value={props} />
      <PreJson value={query} />
    </>
  );
};

AboutPage.getInitialProps = async (ctx) => ({
  renderedAt: Date.now(),
  renderedBy: ctx.req ? 'server' : 'browser',
});

export default AboutPage;
