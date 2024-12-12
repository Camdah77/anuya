import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Hero from "../../components/hero3"

const BlogPost = () => {
  return (
    <Layout pageTitle="Colorful news!">
      <Hero />
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Colorful news: Art by Anuya | Camilla Dahlström" />

export default BlogPost