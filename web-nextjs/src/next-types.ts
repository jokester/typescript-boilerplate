import { ComponentType } from 'react';
import { NextPageContext } from 'next';

type FullPageProps<UrlParam, PerPageProps> = PerPageProps & {
  // injected by _app.tsx
  route: Pick<NextPageContext, 'pathname' | 'asPath'> & { query: UrlParam & Record<string, string> };
};

type PageGetInitialProps<UrlParam = unknown, PageProps = unknown> = (
  ctx: NextPageContext & { query: UrlParam },
) => PageProps | Promise<PageProps>;

export type PageType<UrlParam = unknown, PageProps = unknown> = ComponentType<FullPageProps<UrlParam, PageProps>> & {
  getInitialProps?: PageGetInitialProps<UrlParam, PageProps>;
};

// no need to distinguish
// export type FunctionalPageType<UrlParam, P = {}, IP = P> = PageType<UrlParam, P | IP> & FunctionComponent<P | IP>;
// export type ClassicPageType<UrlParam, P = {}, IP = P> = PageType<UrlParam, P | IP> & ClassicComponent<P | IP>;
