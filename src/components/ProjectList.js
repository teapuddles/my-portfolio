import React from 'react'
import { Link } from 'gatsby'
// import { Card } from 'bootstrap/dist/css/bootstrap.min.css'


const ProjectList = (props) => {

    let projectProps = props.singleProject
    console.log(projectProps)

    return(
        <div className="project-slice" >
            <button onClick={() => {
                <Link to='/SingleProject' key={projectProps.title} projectProps={projectProps}/>
            }}>{projectProps.title}
            </button>
        </div>
    )
}

export default ProjectList