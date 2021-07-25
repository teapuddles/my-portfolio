import React from 'react'
import Layout from '../components/Layout.js'

import cloudFlipBig from '../images/kevinPics/cloudFlipBig.png'


export default function About () {
    return (
        <Layout pageTitle="About Kevin">
            <div className="about-section">
            <div className="about-cloud-wrapper">
             <img key={cloudFlipBig}
                src={cloudFlipBig}
                alt={"flipped cloud"}
                className="about-cloud"
                >
                </img>
                </div>
            <div className="about-info-container">
            <div className="about-section-info-1">
            <div>About Me lolololololol</div>
            </div>
            <div className='about-section-info-2'>
              <div>
                Hi this is Kevin's About Page
              </div>
            </div>
            </div>
            </div>
        </Layout>
    )
}