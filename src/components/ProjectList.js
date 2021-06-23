import React from 'react'
import { Link } from 'gatsby'

const ProjectList = (props) => {

    let projectProps = props.singleProject

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