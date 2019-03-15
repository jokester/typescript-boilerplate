import React from 'react';
import { ExampleLinks, ExampleProps } from '../src/example-links';

export default class AboutPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <pre>{__filename}</pre>
        <ExampleLinks />
        <ExampleProps {...this.props} />
      </div>
    );
  }
}
