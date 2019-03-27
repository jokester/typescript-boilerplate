import React from 'react';
import { ExampleLinks } from '../src/dummy/example-links';
import { BasePageProps, PageGetInitialProps } from '../src/next-types';
import { PreJson } from '../src/dummy/pre-json';

export default class IndexPage extends React.Component<BasePageProps> {
  static getInitialProps: PageGetInitialProps = async ctx => {
    return {};
  };

  render() {
    return (
      <>
        <ExampleLinks />
        <PreJson value={this.props} />
      </>
    );
  }
}
