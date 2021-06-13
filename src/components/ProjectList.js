import React from 'react'

const ProjectList = (props) => {

    const onProjectClick = () => {
        console.log(`${props.project.title}`)
        // props.handleProjectClick()
    }

    return(
        <div className="project-slice" >
            <button onClick={onProjectClick}>{props.project.title}</button>
        </div>
    )
}

export default ProjectList