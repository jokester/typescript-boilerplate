import React from 'react';
import { ExampleLinks, ExampleProps } from '../src/example-links';

const Index: React.FunctionComponent = props => (
  <div>
    <pre>{__filename}</pre>
    <ExampleLinks />
    <ExampleProps {...props} />
  </div>
);

export default Index;
