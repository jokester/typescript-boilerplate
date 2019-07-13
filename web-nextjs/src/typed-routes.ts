/**
 * a tree of statically typed route nodes (or, href-generators)
 */
import { ParsedUrlQuery } from 'querystring';

export const TypedRoutes = {
  index: '/',
  about: '/about',
  posts: {
    index: '/posts',
    show: ({ postId }: { postId: number | string }) => `/posts/${postId}`,
  },
} as const;

export type TypedRouteParam<RouteNode> = RouteNode extends (param: infer Param) => string ? (Param & ParsedUrlQuery) : {};
