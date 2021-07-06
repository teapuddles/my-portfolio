import React, { useState } from 'react'
// import SingleProject from '../pages/myproject'
// import { Link } from 'gatsby'
import { 
    ProjectSlice,
    ProjectSliceWrapper
 } from './StyledProjectListComponent'


const ProjectList = (props) => {

    const [myModal, setMyModal] = useState(false)

    let projectProps = props.singleProject


    const handleProjectClick = () => {
       return setMyModal === !myModal
    }

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
                 handleProjectClick()
            }}>{projectProps.title}
            </button>
        </ProjectSlice>
        </ProjectSliceWrapper>
    )
}

export default ProjectList