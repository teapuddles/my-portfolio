import React from 'react'
import SingleProject from '../pages/myproject'
import { Link } from 'gatsby'
import { 
    ProjectSlice,
    ProjectSliceWrapper
 } from './StyledProjectListComponent'

const ProjectList = (props) => {

    let projectProps = props.singleProject
    console.log(projectProps)

    return(
        <ProjectSliceWrapper>
        <ProjectSlice>
            {projectProps.title}
            <br></br>
            {projectProps.description}
            <br></br>
            {projectProps.hostLink}

            {/* INSTEAD OF USING A BUTTON TO CREATE NEW PAGES, WE CAN
            RENDER OUT A MODAL HERE USING STATE. THAT WAY PROJECTS ALWAYS STAY ON PROJECT PAGE,
            THERES NO PROP DRILLING, AND WE ALREADY HAVE ALL THE INFO WE WANT. */}

            <button onClick={() => {
                {console.log(projectProps)}
            }}>{projectProps.title}
            </button>
        </ProjectSlice>
        </ProjectSliceWrapper>
    )
}

export default ProjectList