import React from 'react'

const ProjectPage = (props) => {

    return(
        <div className="project-title">
            <div>{props.project.title}</div>
        </div>
    )
}

export default ProjectPage