import React from 'react'
import { Link } from 'gatsby'

import '../../styles.css'
import GbiBridged from '../pages/bg-image'


const Layout = ({ pageTitle, children }) => {
    return (
      <GbiBridged>
      <main>
        <title>{pageTitle}</title>
        <nav className='nav-bar'>
          <div className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
          </div>
        </nav>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      </GbiBridged>
    )
  }
  
export default Layout