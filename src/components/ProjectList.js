import React from 'react'
import ProjectPage from '../pages/ProjectPage'

const ProjectList = (props) => {

    return(
        <div className="project-slice" >
            <Link to="/`${props.project.title}`">{props.project.title}</Link>
        </div>
    )
}

export default ProjectList