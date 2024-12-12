import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  logotype,
  navLinkText,
  siteTitle,
  pageHeading, // New class for the h5
} from './layout.module.css'
import "../styles/index.css"
import "../styles/navbar.css"
import "bootstrap/dist/css/bootstrap.min.css" // Import Bootstrap first

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <nav className="row align-items-center justify-content-between">
        {/* Logotype */}
        <div className="col-2 d-flex align-items-center">
          <Link to="/" className="d-block">
            <img
              src="https://res.cloudinary.com/dj9sie6nl/image/upload/v1734006640/logoanuya.png"
              alt="Logotype Art by Anuya"
              className={`${logotype} img-fluid`}
            />
          </Link>
        </div>

        {/* Navbar */}
        <div className="col-10">
          <ul className={`${navLinks} d-flex`}>
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
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                News!
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Heading centered under logotype */}
      <h5 className={pageHeading}>{pageTitle}</h5>

      <main>
        {children}
      </main>

      <footer className={siteTitle}>
        {data.site.siteMetadata.title}
      </footer>
    </div>
  )
}

export default Layout
