import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
      <main>
        <title>{pageTitle}</title>
        <nav className='nav-bar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
          </ul>
        </nav>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    )
  }
  
export default Layout