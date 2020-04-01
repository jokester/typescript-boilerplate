import React from "react"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

const IndexPage: React.FC = () => (
    <div>
        <h1>example</h1>
        </div>
        );


export default IndexPage;
