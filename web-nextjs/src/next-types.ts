import { ComponentType, ClassicComponent, FunctionComponent } from 'react';
import { NextPageContext } from 'next';

type FullPageProps<PerPageProps> = PerPageProps & {
  // injected by getInitialProps @ _app.tsx
  route: Pick<NextPageContext, 'pathname' | 'query' | 'asPath'>;
};

type PageGetInitialProps<UrlParam = {}, PageProps = {}> = (ctx: NextPageContext & { query: UrlParam }) => PageProps | Promise<PageProps>;

export type PageType<UrlParam = {}, PageProps = {}> = ComponentType<FullPageProps<PageProps>> & {
  getInitialProps?: PageGetInitialProps<UrlParam, PageProps>;
};

// no need to distinguish
// export type FunctionalPageType<UrlParam, P = {}, IP = P> = PageType<UrlParam, P | IP> & FunctionComponent<P | IP>;
// export type ClassicPageType<UrlParam, P = {}, IP = P> = PageType<UrlParam, P | IP> & ClassicComponent<P | IP>;
