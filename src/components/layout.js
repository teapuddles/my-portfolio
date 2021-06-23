import React from 'react'
import { Link } from 'gatsby'

import '../css/layout.css'
import '../css/custom.css'

import GbiBridged from '../pages/bg-image'

const Layout = ({ pageTitle, children }) => {
    return (
      <main>
        <title>{pageTitle}</title>
        <nav className='nav-bar'>
          <div className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
          </div>
        </nav>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    )
  }
  
export default Layout