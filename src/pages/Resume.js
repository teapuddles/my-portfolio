import React from 'react'
import ResumeComponent from '../components/ResumeComponent';
import Layout from '../components/Layout.js';


const Resume = () => {

    return(
        <Layout pageTitle='Current Resume'>
            <div className="Resume-section">
                    <ResumeComponent />
            </div>
        </Layout>
    )
}

export default Resume
