import React from 'react';
import { ExampleLinks } from '../src/dummy/example-links';
import { PreJson } from '../src/dummy/pre-json';
import { BasePageProps } from '../src/next-types';

const Show: React.FunctionComponent<BasePageProps<{ customId: string }>> = props => (
  <div>
    <pre>{__filename}</pre>
    <ExampleLinks />
    <PreJson value={props.url.query.customId} />
    <PreJson value={props} />
  </div>
);

export default Show;
