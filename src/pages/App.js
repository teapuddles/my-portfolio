import React from 'react'
import { projects } from '../data/project_data'
import ProjectList from '../components/ProjectList'
import ProjectPage from './ProjectPage'


const App = () => {

    return(
        <div className="project-circle">
        <div className="project-slice-container">
        {projects.map((project) => (
            <ProjectList key={project.title} project={project} onClick={<ProjectPage key={project.title}/>} />
          ))}
        </div>
        </div>
    )
}

export default App