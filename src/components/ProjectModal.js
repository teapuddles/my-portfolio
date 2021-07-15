import React from 'react'

const ProjectModal = (props) => {

    const modalProjectProps = props.projectProps

    const closeModal = () => {
        props.setMyModal(false)
    }

    return(
        <div className='modal-container' onClick={closeModal}>
            <h2>{modalProjectProps.title}</h2>
            <img key={modalProjectProps.title} 
             src={modalProjectProps.siteImage} 
             alt={modalProjectProps.title} 
             className='modal-image' 
            >
         </img>
         <h3>{modalProjectProps.description}</h3>
            <a href={props.projectProps.hostLink}>Hosted Site</a>
        </div>
    )
}

export default ProjectModal