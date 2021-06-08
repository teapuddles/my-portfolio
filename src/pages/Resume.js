import React from 'react'
import { Link } from 'gatsby'
import { Document } from 'react-pdf'

const Resume = () => {

    return(
        <div className="Resume-section">
        <div>
            Hi this is Kevin's Resume Page
        </div>
        <Link to="/">Back to Homepage</Link>
        <Document file='Resume_Tech_2021.pdf' />
        </div>
    )
}

export default Resume