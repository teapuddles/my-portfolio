import React, { useState } from 'react'
// import SingleProject from '../pages/myproject'
// import { Link } from 'gatsby'
import ProjectModal from './ProjectModal'
import { 
    ProjectSlice,
    ProjectSliceWrapper
 } from './StyledProjectListComponent'


const ProjectList = (props) => {

    const [myModal, setMyModal] = useState(false)

    let projectProps = props.singleProject

    const handleProjectClick = () => {
        setMyModal(!myModal)
    }

    return(
        // this modal probably needs to be rendered 
        // on project page instead of here. 
        <>
            {myModal ? (
                <ProjectModal projectProps={projectProps} setMyModal={setMyModal}/>
            ) : 
            null 
            }
        <ProjectSliceWrapper>
        <ProjectSlice>
            {projectProps.title}
              <br></br>
            {projectProps.description}
              <br></br>
            <button onClick={() => {
                 handleProjectClick()
            }}>{projectProps.title}
            </button>
        </ProjectSlice>
        </ProjectSliceWrapper>
        </>
    )
}

export default ProjectList