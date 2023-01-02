import React from 'react';
import Link from 'next/link';
import { TypedRoutes } from '../config/typed-routes';

export const ExampleLinks: React.FunctionComponent = (props) => {
  return (
    <div className="space-x-4">
      <Link href={TypedRoutes.index}>
        <button type="button">index page</button>
      </Link>
      <Link href={TypedRoutes.about}>
        <button type="button">about page</button>
      </Link>
      <Link href={TypedRoutes.posts.index}>
        <button type="button">post index</button>
      </Link>
      <Link href={TypedRoutes.posts.show({ postId: 1 })}>
        <button type="button">post show (postId={1})</button>
      </Link>
      <Link href={TypedRoutes.posts.show({ postId: 2 })}>
        <button type="button">post show (postId={2})</button>
      </Link>
    </div>
  );
};
