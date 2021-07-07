import React from 'react'
import Link from 'gatsby'

const ProjectModal = (props) => {

    const closeModal = () => {
        props.setMyModal(false)
    }

    return(
        <div onClick={closeModal}>
            HELLO EVERYONE YOU'VE MADE IT TO THE MODAL
        </div>
    )
}

export default ProjectModal