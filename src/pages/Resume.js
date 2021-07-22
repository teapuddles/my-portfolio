import React from 'react'
import ResumeComponent from '../components/ResumeComponent';
import Layout from '../components/Layout.js';

import smallCloudFlip from '../images/kevinPics/smallCloudFlip.png'


const Resume = () => {

    return(
        <Layout pageTitle='Current Resume'>
            <div className='resume-section'>
                    <ResumeComponent />
            <div className="resume-cloud-wrapper">
            <img key={smallCloudFlip} 
             src={smallCloudFlip} 
             alt={'small cloud'} 
             className='resume-cloud' 
            >
            </img>
            </div>
            </div>
        </Layout>
    )
}

export default Resume
