import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout.js'

const About = () => {

    return(
        <Layout>
        <div className="about-section">
        <div>
            Hi this is Kevin's About Page
        </div>
        <Link to="/">Back to Homepage</Link>
        </div>
        </Layout>
    )
}

export default About