import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero2"

const ReadMore = () => {
  return (
    <Layout pageTitle="Read More">
      <Hero />
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>Art by Camilla | Read More</title>
export default ReadMore
