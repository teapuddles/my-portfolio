import React from 'react'
import ResumeComponent from '../components/ResumeComponent';
import Layout from '../components/Layout.js';
import { StaticImage } from 'gatsby-plugin-image'

const Resume = () => {

    return(
        <Layout pageTitle='Current Resume'>
            <div className='resume-section'>
                <ResumeComponent />
            <div className="resume-cloud-wrapper">
                <StaticImage 
                src= "../images/kevinPics/smallCloudFlip.png"
                alt= "small cloud"
                className="resume-cloud"
                placeholder="none"
                />
            </div>
            </div>
        </Layout>
    )
}

export default Resume
