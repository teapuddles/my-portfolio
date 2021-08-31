import React, { useState } from 'react'
import ProjectModal from './ProjectModal'
import { 
    ProjectSlice,
    ProjectSliceWrapper
 } from './StyledProjectListComponent'

import {GatsbyImage} from 'gatsby-plugin-image'
 
const ProjectList = (props) => {
   
    const [myModal, setMyModal] = useState(false)

    let projectProps = props.singleProject

    const handleProjectClick = () => {
        setMyModal(!myModal)
    }

    return(
        <>
            {myModal ? (
                <ProjectModal projectProps={projectProps} setMyModal={setMyModal}/>
            ) : 
            null 
            }
        <ProjectSliceWrapper>
        <ProjectSlice>
            {/* dynamic image handling here via gql */}
         <img key={projectProps.title} 
             src={projectProps.image} 
             alt={projectProps.title} 
             className='project-image' 
             onClick={() => {
                handleProjectClick()
            }}>
         </img>
            <br></br>
            <button className="project-buttons" onClick={() => {
                 handleProjectClick()
            }}>{projectProps.title}
            </button>
        </ProjectSlice>
        </ProjectSliceWrapper>
        </>
    )
}

export default ProjectList



