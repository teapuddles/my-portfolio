import React from 'react'

const MediumList = (props) => {


    return(
        <div className="medium-slice" >
            <h1>{props.post.node.title}</h1>
        </div>
    )
}

export default MediumList