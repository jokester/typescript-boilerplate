import React from 'react';
import { RouteLink } from '../routes';

export const ExampleLinks: React.FunctionComponent = props => {
  const customId = Math.floor(Math.random() * 20);
  return (
    <div>
      <RouteLink route="index">
        <button>index page</button>
      </RouteLink>
      <RouteLink route="about">
        <button>about page</button>
      </RouteLink>
      <RouteLink route="show" params={{ customId }}>
        <button>show page with customId=random()</button>
      </RouteLink>
    </div>
  );
};
