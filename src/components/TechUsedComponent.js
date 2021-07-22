import React from 'react'

const TechUsedComponent = (props) => {

    const tech = props.tech

    return(
    <div className="li-wrapper">
    <ul className="tech-used-ul">
    <li className="tech-used-li">{tech}</li>
    </ul>
    </div>
    )
}

export default TechUsedComponent