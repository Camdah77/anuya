import * as React from "react"
import { Link } from "gatsby"
import { container, pageTitle } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <header>
        <nav className={container}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/readmore">Read more</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className={pageTitle}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
