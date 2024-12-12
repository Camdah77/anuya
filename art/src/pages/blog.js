import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from "../components/hero2"

const BlogPage = () => {
    return (
      <Layout pageTitle="News">
        <Hero />
         <p>News, classes and more</p>
      </Layout>
    )
  }
  
  export const Head = () => <Seo title="News: Art by Anuya | Camilla Dahlström" />
  
  export default BlogPage