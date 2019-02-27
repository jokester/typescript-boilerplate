import React from 'react';
import { RouteLink } from './routes';

export const ExampleLinks: React.FunctionComponent = props => (
  <div>
    <RouteLink route="index" >
      <button>index page</button>
    </RouteLink>
    <RouteLink route="about" >
      <button>about page</button>
    </RouteLink>
    <RouteLink route="show" params={{ customId: 3 }} >
      <button>show page with customId=3 </button>
    </RouteLink>
  </div>
);

export const ExampleProps: React.FunctionComponent = props => <pre>{JSON.stringify(props, null, 2)}</pre>;
