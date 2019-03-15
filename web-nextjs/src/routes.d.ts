import * as NextRoutes from 'next-routes';
// export { Router, Link } from './routes';

declare module './routes' {
  export const Router: NextRoutes.Router;
  export const RouteLink: NextRoutes.Registry['Link'];
}
