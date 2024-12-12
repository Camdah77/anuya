import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from "../components/hero2"
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => { 
       return (
      <Layout pageTitle="News">
        <Hero />
        <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      </Layout>
    )
  }
  export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
  
export const Head = ({ data }) => <Seo title="News: Art by Anuya | Camilla Dahlström" />
  
  export default BlogPage