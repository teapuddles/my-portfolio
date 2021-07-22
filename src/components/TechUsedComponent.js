import React from 'react'

const TechUsedComponent = (props) => {

    const tech = props.tech
    console.log(tech)
    return(
    <div className="tech-used-li">
    <li>{tech}</li>
    </div>
    )
}

export default TechUsedComponent