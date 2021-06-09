import React from 'react'
import { Link } from 'gatsby'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


const Resume = () => {

    return(
        <div className="Resume-section">
        <div>
            Hi this is Kevin's Resume Page
        </div>
        <Link to="/">Back to Homepage</Link>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <div className='pdf-conatiner'>
            <Viewer fileUrl="../images/Resume_Tech_2021.pdf" />
            </div>
        </Worker>
        </div>
    )
}

export default Resume