import React from 'react'
import { Link } from 'gatsby'
import ResumeViewer from '../components/ResumeViewer';

const Resume = () => {

    return(
        <div className="Resume-section">
        <div>
            Hi this is Kevin's Resume Page
        </div>
        <Link to="/">Back to Homepage</Link>
        <div>
            <ResumeViewer />
        </div>
        </div>
    )
}

export default Resume
