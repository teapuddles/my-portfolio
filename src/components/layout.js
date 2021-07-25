import React from 'react'
import { Link } from 'gatsby'

import '../css/custom.css'

import linkedin from '../images/icons/linkedin.png'
import github from '../images/icons/github.png'
import medium from '../images/icons/medium.png'
import email from '../images/icons/email.png'




const Layout = ({ pageTitle, children }) => {
    return (
      <>
        <div id='background-img' />
        <title>{pageTitle}</title>
        <header>

          <Link to="/" id='name-wrapper'>
            <h2>Kevin Gleeson</h2>
            <h5>Web Developer</h5>
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
        <footer>
          <div className="social-icons">
          <img key={linkedin}
                src={linkedin}
                alt={"linkedin"}
                className="linkedin-icon"
                >
                </img>
          <img key={medium}
                src={medium}
                alt={"medium"}
                className="medium-icon"
                >
                </img>
          <img key={github}
                src={github}
                alt={"github"}
                className="github-icon"
                >
                </img>
          <img key={email}
                src={email}
                alt={"email"}
                className="email-icon"
                >
                </img>

          </div>
        </footer>
      </>
    )
  }
  
export default Layout