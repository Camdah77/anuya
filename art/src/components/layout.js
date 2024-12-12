import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  logotype,
  navLinkText,
  siteTitle
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
      <nav>
        <Link to="/" className={logotype}>
          <img 
            src="https://res.cloudinary.com/dj9sie6nl/image/upload/v1734006640/logoanuya.png"
            alt="Logotype Art by Anuya"
          />
        </Link>

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

          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              News!
            </Link>
          </li>
        </ul>
      </nav>
      
      <main>
        <h5 className={heading}>{pageTitle}</h5>
        {children}
      </main>

      <footer className={siteTitle}>{data.site.siteMetadata.title}</footer>
    </div>
  )
}

export default Layout
