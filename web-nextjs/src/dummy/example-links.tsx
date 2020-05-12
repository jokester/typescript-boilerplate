import React from 'react';
import Link from 'next/link';
import { TypedRoutes } from '../typed-routes';

export const ExampleLinks: React.FunctionComponent = (props) => {
  const postId = Math.floor(Math.random() * 20);
  return (
    <div>
      <Link href={TypedRoutes.index}>
        <button>index page</button>
      </Link>
      <Link href={TypedRoutes.about}>
        <button>about page</button>
      </Link>
      <Link href={TypedRoutes.posts.index}>
        <button>post index</button>
      </Link>
      <Link href={TypedRoutes.posts.show({ postId })}>
        <button>post show (postId={postId})</button>
      </Link>
    </div>
  );
};
