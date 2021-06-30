import React from 'react'
import Layout from '../components/Layout.js'
import ProjectList from '../components/ProjectList'

import { projects } from '../data/project_data'

// my goal here is to have this projects page, which yeilds our project list. 
// When a user clicks on a list item, a moda\l pops out with information on that project.
// smooth transition with floating icons over the bg image. SIMPLE SIMPLE SIMPLE BUT COMPLEX!

const Projects = () => {

    return(
        <Layout pageTitle="Kevin's Projects">
        <div className="project-section">
        <div className="project-slice-container">
        {projects.map((singleProject) => (
            <ProjectList key={singleProject.title} singleProject={singleProject} />
          ))}
        </div>
        </div>
        </Layout>
    )
}

export default Projects
