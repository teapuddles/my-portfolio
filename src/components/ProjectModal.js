import React from 'react'
import Link from 'gatsby'

const ProjectModal = (props) => {

    const closeModal = () => {
        props.setMyModal(false)
    }

    return(
        <div className='modal-container' onClick={closeModal}>
            <h2>{props.projectProps.title}</h2>
            <h3>{props.projectProps.description}</h3>
            <ul href={props.projectProps.hostLink}>Hosted Site</ul>
        </div>
    )
}

export default ProjectModal