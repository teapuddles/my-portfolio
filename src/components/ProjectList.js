import React, { useState } from 'react'
import ProjectModal from './ProjectModal'
import { 
    ProjectSlice,
    ProjectSliceWrapper
 } from './StyledProjectListComponent'
 import food from '../images/icons/food.png'
 import myIcon from '../images/icons/myIcon.png'
 import virus from '../images/icons/virus.png'
 import piano from '../images/icons/piano.png'
 
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



