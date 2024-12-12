import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from "../components/hero2"
import "../styles/blog.css"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Colorful news!">
           <Hero />

      <ul>
        {data.allMdx.nodes.map(node => (
           <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Updated:{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            </article>
 
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="News: Art by Anuya | Camilla Dahlström" />;

export default BlogPage;