import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout.js'

const Project = (props) => {
    console.log(props)
    return(
        <Layout pageTitle={`${props.projectProps.title}`}>
        <div className="Project-section">
        <div>
            HI THERE
        </div>
        <Link to="/">Back to Homepage</Link>
        </div>
        </Layout>
    )
}

export default Project
