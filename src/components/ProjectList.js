import React from 'react'

const ProjectList = (props) => {

    return(
        <div className="project-slice">
            <div>{props.project.title}</div>
        </div>
    )
}

export default ProjectList