export interface PageProps<M extends Record<string, string> = Record<never, string>> {
  // e.g. /conn/:id
  path: string;

  // e.g. /conn/123
  url?: string;

  matches?: M;
}
