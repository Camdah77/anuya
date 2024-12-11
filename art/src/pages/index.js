import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css" // Import Bootstrap first
import "../styles/index.css" // Import custom styles
import { Link } from "gatsby"
import Hero from "./hero"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
       <Link to="/readmore">Read more</Link>
      <Hero /> {/* Include the Hero component if it's intended to be used */}
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Art by Camilla</title>

// Step 3: Export your component
export default IndexPage
