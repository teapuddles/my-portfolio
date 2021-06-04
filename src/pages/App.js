import React from 'react'
import { projects } from '../data/project_data'


const App = () => {

    return(
        {projects.map((project) => (
            <ProjectList key={project.title} />
          ))}
    )
}

