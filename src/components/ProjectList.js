import React from 'react'
import Project from '../pages/project'

const ProjectList = (props) => {

    let projectProps = props.project
    console.log(props.project)
    // const onProjectClick = () => {
    //     console.log(`${props.project.title}`)
    //     // props.handleProjectClick()
    // }

    return(
        <div className="project-slice" >
            <button onClick={() => {
                <Project project={projectProps}/>
            }}>{props.project.title}
            </button>
        </div>
    )
}

export default ProjectList