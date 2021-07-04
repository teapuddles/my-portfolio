import React from 'react'
import Layout from '../components/Layout.js';


const MyProject = (props) => {
    
    console.log(props)

    return(
        <Layout pageTitle='a project'>
            <div className="project-modal">
            </div>
        </Layout>
    )
}

export default MyProject
