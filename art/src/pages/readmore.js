import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero2"
import Seo from '../components/seo'


const ReadMore = () => {
  return (
    <Layout pageTitle="Read More">
      <Hero />
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Read more: Art by Anuya | Camilla Dahlström" />
export default ReadMore
