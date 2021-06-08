import React, { useState } from 'react'
import { Link } from 'gatsby'
import { projects } from '../data/project_data'
import ProjectList from '../components/ProjectList'


const App = () => {

    const [showProject, setShowProject] = useState(false)
    // you're going to create the projectpage component onClick with a ternary useState(boolean)

    const handleProjectClick = () => {
        setShowProject = !showProject
    }

    return(
        <div className="app">
        <div className="project-circle">
        <div className="project-slice-container">
        {projects.map((project) => (
            <ProjectList key={project} project={project} handleProjectClick={handleProjectClick} />
          ))}
        </div>
        </div>
        <Link to='/About'>About  </Link>
        <Link to='/Resume'>Resume  </Link>
        </div>
    )
}

export default App