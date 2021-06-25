import React from 'react'
import { Link } from 'gatsby'

import '../css/layout.css'
import '../css/custom.css'

import GbiBridged from '../pages/bg-image'

const Layout = ({ pageTitle, children }) => {
    return (
      <>
        <div id='background-img' />
        <title>{pageTitle}</title>
        <header>

          <Link to="/" id='name-wrapper'>
            <h2>Kevin Gleeson</h2>
            <h5>Web developer</h5>
          </Link>

          <nav className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
          </nav>

        </header>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
        <footer>Kevin 2021</footer>
      </>
    )
  }
  
export default Layout