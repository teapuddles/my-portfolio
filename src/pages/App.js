import React, { useState } from 'react'
import { projects } from '../data/project_data'
import ProjectList from '../components/ProjectList'
import ProjectPage from './ProjectPage'


const App = () => {

    const [showProject, setShowProject] = useState(false)
    // you're going to create the projectpage component onClick with a ternary useState(boolean)

    const handleProjectClick = () => {
        setShowProject = !showProject
    }

    return(
        <div className="project-circle">
        <div className="project-slice-container">
        {projects.map((project) => (
            <ProjectList key={project.title} handleProjectClick={handleProjectClick} />
          ))}
        </div>
        </div>
    )
}

export default App