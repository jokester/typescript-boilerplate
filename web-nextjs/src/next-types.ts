import * as NextApp from 'next/app';
import { DefaultQuery } from 'next-server/router';

type UrlParam = DefaultQuery;

export interface BaseAppProps extends NextApp.AppProps<UrlParam>, NextApp.DefaultAppIProps {}

/**
 * @typedef RouteParam parameters in path (extracted by next-routes) and in query
 */
export interface BasePageProps<RouteParam extends Record<string, string> = Record<string, string>> {
  // provided by next-routes , and _app.getInitialProps
  url: {
    query: RouteParam;
    pathname: string;
    asName: string;
  };
}

export interface AppGetInitialProps<AppProps extends BaseAppProps> {
  (appContext: NextApp.NextAppContext<UrlParam>): Promise<Pick<AppProps, Exclude<keyof AppProps, keyof NextApp.AppProps>>>;
}

export interface PageGetInitialProps<PageProps extends BasePageProps = BasePageProps> {
  (ctx: NextApp.NextAppContext<UrlParam>['ctx']): Promise<Pick<PageProps, Exclude<keyof PageProps, keyof BasePageProps>>>;
}

export function inServer(ctx: NextApp.NextAppContext<UrlParam>['ctx']) {
  return !!ctx.req;
}
