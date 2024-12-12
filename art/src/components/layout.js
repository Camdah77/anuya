import * as React from "react"
import { Link } from "gatsby"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText } from './layout.module.css'
  import "../styles/index.css"
  import "bootstrap/dist/css/bootstrap.min.css" // Import Bootstrap first



  const Layout = ({ pageTitle, children }) => {
    return (
      <div className={container}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/readmore" className={navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    )
  }
  
export default Layout


