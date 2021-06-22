import React from 'react'
import Project from '../pages/Project'

const ProjectList = (props) => {

    let projectProps = props.singleProject
    console.log(projectProps)

    const onProjectClick = () => {
        console.log(`${props.project.title}`)
        props.handleProjectClick()
    }

    return(
        <div className="project-slice" >
            <button onClick={() => {
                <Project key={projectProps.title} onClick={onProjectClick()} projectProps={projectProps}/>
            }}>{projectProps.title}
            </button>
        </div>
    )
}

export default ProjectList