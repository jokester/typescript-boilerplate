import React from 'react';
import { ExampleLinks } from '../src/dummy/example-links';
import { PreJson } from '../src/dummy/pre-json';
import { PageGetInitialProps } from '../src/next-types';

interface PageProps {}

export default class AboutPage extends React.Component<PageProps> {
  static getInitialProps: PageGetInitialProps<{}, PageProps> = async ctx => {
    return {};
  };

  render(): React.ReactNode {
    return (
      <div>
        <ExampleLinks />
        <pre>{__filename}</pre>
        <PreJson value={this.props} />
      </div>
    );
  }
}
