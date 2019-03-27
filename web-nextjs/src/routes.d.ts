import * as NextRoutes from 'next-routes';
// export { Router, Link } from './routes';

declare module './routes' {
  interface TypedRoutes {
    index: {};
    about: {};
    show: { customerId: string };
  }

  interface TypedRouter {
    pushRoute<K extends keyof TypedRoutes>(page: K, param: TypedRoutes[K]): Promise<void>;
  }

  export const AppRouter: TypedRouter;
  export const Router: NextRoutes.Router;
  export const RouteLink: NextRoutes.Registry['Link'];
}
