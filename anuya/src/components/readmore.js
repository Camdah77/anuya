import * as React from "react"
import "../styles/index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
          <Link to="/">Home</Link>
          <h1>Read more</h1>
          <p>Camilla Ho ho</p>
        </main>
      )
    }
  export const Head = () => (
    <>
      <title>Read More</title>
      <meta name="About Camilla" content="About Camilla" />
    </>
  )
  export default AboutPage