import React from 'react';
import { ExampleLinks } from '../src/dummy/example-links';
import { BasePageProps, PageGetInitialProps } from '../src/next-types';
import { PreJson } from '../src/dummy/pre-json';

export default class AboutPage extends React.Component<BasePageProps> {
  static getInitialProps: PageGetInitialProps<BasePageProps> = async ctx => {
    return {};
  };

  render(): React.ReactNode {
    return (
      <div>
        <pre>{__filename}</pre>
        <ExampleLinks />
        <PreJson value={this.props} />
      </div>
    );
  }
}
