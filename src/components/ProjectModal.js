import React from 'react'

const ProjectModal = (props) => {

    const modalProjectProps = props.projectProps

    const closeModal = () => {
        props.setMyModal(false)
    }

    return(
        <div className='modal-container' >
            <h3 className='close-out-box' onClick={closeModal}> X </h3>
            <div className="modal-data-wrapper">
            <h2>{modalProjectProps.title}</h2>
            <img key={modalProjectProps.title} 
             src={modalProjectProps.siteImage} 
             alt={modalProjectProps.title} 
             href={props.projectProps.hostLink}
             className='modal-image' 
            >
         </img>
         <h3>{modalProjectProps.description}</h3>
            <a href={props.projectProps.hostLink}>Hosted Site</a>
            </div>
        </div>
    )
}

export default ProjectModal