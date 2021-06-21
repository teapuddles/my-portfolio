import React from 'react'
import Project from '../pages/Project'

const ProjectList = (props) => {

    let projectProps = props.singleProject
    console.log(props.singleProject)
    // const onProjectClick = () => {
    //     console.log(`${props.project.title}`)
    //     // props.handleProjectClick()
    // }

    return(
        <div className="project-slice" >
            <button onClick={() => {
                <Project myProject={projectProps}/>
            }}>{props.singleProject.title}
            </button>
        </div>
    )
}

export default ProjectList