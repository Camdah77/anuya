import * as React from "react"
import "../styles/index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'gatsby'
import Hero from "./hero"


// Step 2: Define your component
const ReadMore = () => {
  return (
    <main>
       <Link to="/">Back to Home</Link> 
      <Link to="./exhib.js">Exhib</Link>
       <Hero /> {/* Include the Hero component if it's intended to be used */}  
       <h1>Read More!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Art by Camilla | Read More </title>

// Step 3: Export your component
export default ReadMore