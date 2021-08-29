import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
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
            <h2 className="dev-name">Kevin Gleeson</h2>
            <h5 className="dev-title">Web Developer</h5>
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
          <a href="https://www.linkedin.com/in/teapuddles824/">
          <StaticImage 
            src= "../images/icons/linkedin.png"
            alt= "linkedin"
            className="linkedin-icon"
            />
              </a>
         <a href="https://teapuddles.medium.com/">
         <StaticImage 
            src= "../images/icons/medium.png"
            alt= "medium"
            className="medium-icon"
            />
              </a>
         <a href="https://github.com/teapuddles">   
         <StaticImage 
            src= "../images/icons/github.png"
            alt= "github"
            className="github-icon"
            />
                </a> 
        <Link to="/contact">    
        <StaticImage 
            src= "../images/icons/email.png"
            alt= "email"
            className="email-icon"
            />  
              </Link>
          </div>
        </footer>
      </>
    )
  }
  
export default Layout
