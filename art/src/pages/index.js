import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"
import Seo from '../components/seo'



const IndexPage = () => {
  return (
    <Layout pageTitle="Art by Anuya">
      <Hero />
      <p>This info is Static info</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Art by Anuya | Camilla Dahlström" />
export default IndexPage
