import * as React from "react"
import { Link } from "gatsby"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  logotype,
  navLinkText } from './layout.module.css'
  import "../styles/index.css"
  import "../styles/navbar.css"
  import "bootstrap/dist/css/bootstrap.min.css" // Import Bootstrap first



  const Layout = ({ pageTitle, children }) => {
    return (
      <div className={container}>
        <div className={logotype}>
        <img src="https://res.cloudinary.com/dj9sie6nl/image/upload/v1734006640/logoanuya.png"
        alt="Logotype Art by Anuya"
      /></div>
        
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


