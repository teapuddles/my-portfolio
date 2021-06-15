import React from 'react'
import Project from '../pages/Project'

const ProjectList = (props) => {

    console.log(props.project)
    // const onProjectClick = () => {
    //     console.log(`${props.project.title}`)
    //     // props.handleProjectClick()
    // }

    return(
        <div className="project-slice" >
            <button onClick={() => {
                <Project project={props.project}/>
            }}>{props.project.title}</button>
        </div>
    )
}

export default ProjectList