import React from 'react'
import { Link } from 'gatsby'
import { ProjectSlice } from './StyledProjectComponent'

const ProjectList = (props) => {

    let projectProps = props.singleProject
    console.log(projectProps)

    return(
        <ProjectSlice>
            {projectProps.title}
            <br></br>
            {projectProps.description}
            <br></br>
            {projectProps.hostLink}
            <button onClick={() => {
                <Link to='/SingleProject' key={projectProps.title} projectProps={projectProps}/>
            }}>{projectProps.title}
            </button>
        </ProjectSlice>
    )
}

export default ProjectList