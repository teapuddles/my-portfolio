import React from 'react'
import { Link } from 'gatsby'
import ResumeComponent from '../components/ResumeComponent';
import Layout from '../components/Layout.js';


const Resume = () => {

    return(
        <Layout>
        <div className="Resume-section">
        <div>
            Hi this is Kevin's Resume Page
        </div>
        <Link to="/">Back to Homepage</Link>
        <div>
            <ResumeComponent />
        </div>
        </div>
        </Layout>
    )
}

export default Resume
