import React from 'react';
import '../styles/root.scss';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

const IndexPage: React.FC = () => (
  <div className="app-root">
    <h1>example</h1>
  </div>
);

export default IndexPage;
