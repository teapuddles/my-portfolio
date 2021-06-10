import React from 'react'
import { Link } from 'gatsby'
import ResumeComponent from '../components/ResumeComponent';


const Resume = () => {

    return(
        <div className="Resume-section">
        <div>
            Hi this is Kevin's Resume Page
        </div>
        <Link to="/">Back to Homepage</Link>
        <div>
            <ResumeComponent />
        </div>
        </div>
    )
}

export default Resume
