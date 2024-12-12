import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Camilla">
      <Hero />
      <p>This info is Static info</p>
    </Layout>
  )
}

export const Head = () => <title>Art by Camilla</title>
export default IndexPage
