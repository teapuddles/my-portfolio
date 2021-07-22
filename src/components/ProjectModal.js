import React from 'react'
import TechUsedComponent from './TechUsedComponent'

const ProjectModal = (props) => {

    const modalProjectProps = props.projectProps

    const closeModal = () => {
        props.setMyModal(false)
    }

    return(
        <div className='modal-container' >
            <div className='close-out-box' onClick={closeModal}> X </div>
            <div className="modal-data-wrapper">
            <h2 className='modal-title'>{modalProjectProps.title}</h2>
            <img key={modalProjectProps.title} 
             src={modalProjectProps.siteImage} 
             alt={modalProjectProps.title} 
             href={modalProjectProps.hostLink}
             className='modal-image' 
            >
         </img>
         <div className="modal-info-wrapper">
         <div className="modal-description">{modalProjectProps.description}
         </div>
         <div className="tech-used-li-container">
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