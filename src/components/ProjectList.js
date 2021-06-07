import React from 'react'

const ProjectList = (props) => {

    // const onProjectClick = () => {
    //     props.handleProjectClick()
    // }
    console.log(props)
    return(
        <div className="project-slice" >
            <li>{props.project.title}</li>
        </div>
    )
}

export default ProjectList