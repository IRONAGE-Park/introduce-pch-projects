import React from "react";
import { graphql } from "gatsby";
import { MainLayout } from "./styles/Layout.styles";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <MainLayout pageTitle="Blog">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
