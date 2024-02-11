import React from 'react';
import { NextPage } from 'next';
import clsx from 'clsx';
import { trpcClient } from '../src/api/trpc-client';

const IndexPage: NextPage = (props) => {
  const serverRuntimeMeta = trpcClient.siteMeta.getSiteInfo.useQuery();
  return (
    <div className={clsx('container text-center')}>
      <h1>An empty next.js app</h1>
      <hr className="my-2" />
      <div>
        <p>API status:{serverRuntimeMeta.status}</p>
        <p>server startAt: {serverRuntimeMeta.data?.serverStartAt.toISOString()}</p>
      </div>
    </div>
  );
};

// IndexPage.getInitialProps = async ctx => ({});

export default IndexPage;
