import React, { FC, useEffect } from 'react';
import { NextPage } from 'next';
import clsx from 'clsx';
import { trpcClient } from '../src/api/trpc-client';

const TrpcGetExample: FC = () => {
  const query1 = trpcClient.siteMeta.getSiteInfo.useQuery({showUserAgent: true});
  const query2 = trpcClient.siteMeta.getSiteInfo.useQuery({});
  return (
    <div>
      <h2>GET API: example</h2>
      <p>query 1 status:{query1.status}</p>
      <p>query 2 status:{query2.status}</p>
      <p>server startAt: {query2.data?.serverStartAt.toISOString()}</p>
    </div>
  );
};

const TrpcPostExample: FC = () => {
  const mutation = trpcClient.siteMeta.mutationExample.useMutation();

  useEffect(() => {
    console.debug('mutationExample', mutation);
  }, [mutation]);

  return (
    <div className='space-y-2 flex flex-col'>
      <h2>POST API: example</h2>
      <button
        className='outline outline-blue-500'
        type='button'
        onClick={() => mutation.mutate({triggerError: false})}
      >
        trigger success
      </button>
      <button
        className='outline outline-red-500'
        type='button'
        onClick={() => mutation.mutate({triggerError: true, trpcCode: 'CONFLICT'})}
      >
        throw TRPCError(CONFLICT) in server
      </button>
      <button
        className='outline outline-red-500'
        type='button'
        onClick={() => mutation.mutate({triggerError: true, httpStatusCode: 429})}
      >
        trigger APIError in server
      </button>
      <button
        className='outline outline-red-500'
        type='button'
        onClick={() => mutation.mutate({triggerError: null as any})}
      >
        trigger Zod validation error
      </button>
      {mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
    </div>
  );
};

const IndexPage: NextPage = (props) => {
  return (
    <div className={clsx('container text-center')}>
      <h1>An empty next.js app</h1>
      <hr className='my-2' />
      <TrpcGetExample />
      <TrpcPostExample />
    </div>
  );
};

// IndexPage.getInitialProps = async ctx => ({});

export default IndexPage;
