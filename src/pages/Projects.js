import React from 'react'
import Layout from '../components/Layout.js'
import ProjectList from '../components/ProjectList'

import { projects } from '../data/project_data'


const Projects = (projectProps) => {
   console.log(projectProps)

    return(
        <Layout pageTitle={`${projectProps.title}`}>
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
