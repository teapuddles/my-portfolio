import React from 'react'
import Layout from '../components/Layout.js'
import { StaticImage } from 'gatsby-plugin-image'


export default function About () {
    return (
        <Layout pageTitle="About Kevin">
            <div className="about-section">
            <div className="about-cloud-wrapper">
            <StaticImage 
                src= "../images/kevinPics/cloudFlipBig.png"
                alt= "flipped cloud"
                className="about-cloud"
            />
                </div>
            <div className="about-info-container">
            <div className="about-pic-1-wrapper">
            <StaticImage 
                src= "../images/kevinPics/kevinShanghai.jpg"
                alt= "kevin at bus"
                className="about-pic-1"
            />
                </div>
            <div className='about-section-info-1'>
            <div className="about-text-1">
                When I was 10 years old, I was asked to put in my yearbook what I wanted to be when I grew up. 
                Since becoming a secret agent wasn't a viable career path, I wrote down Engineer. However, before I would dive into the world of software engineering, I would embark on a journey to become a life long learner.
                <br></br><br></br>
                After earning a Bachelors in Music Education, I traveled to Seoul, South Korea to get my feet wet teaching. What I didn't expect to find was a deep desire to surround myself within the unfamiliar.
                <br></br><br></br>
                The quest continued in Shanghai, China where I taught music at an international school. While there, I was able to access educational technology and software that I hadn't known existed. That's when my search for the unknown started to focus back on technology.  
                <br></br><br></br>
                Upon returning home, I attended Flatiron School and doubled down on the passions I've always had and re-developed after years abroad. Now I look to bring my talents, creativty, and smile to a team of other learners!
              </div>
            </div>
            </div>
            <div className="about-section-info-foot-wrap">
            <div className="about-section-info-footer">
                For all contacts and inquiries, please click the email icon below.
            </div>
            </div>
            </div>
        </Layout>
    )
}