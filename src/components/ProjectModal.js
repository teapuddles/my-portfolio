import React from 'react'
import TechUsedComponent from './TechUsedComponent'

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
             href={modalProjectProps.hostLink}
             className='modal-image' 
            >
         </img>
         <div className="modal-info-wrapper">
         <div className="modal-description">{modalProjectProps.description}
         {modalProjectProps.techUsed.map((tech) => (
             <TechUsedComponent key={tech} tech={tech}></TechUsedComponent>
         ))}
             </div>
             </div>
         <a href={modalProjectProps.hostLink}>{modalProjectProps.linkMessage}</a>
            </div>
        </div>
    )
}

export default ProjectModal