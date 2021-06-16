import React from 'react'

const MediumList = (props) => {

    const postInfo = props.post.node

    return(
        <div className='medium-box'>
        <div className="medium-slice" >
            <div>{postInfo.title}</div>
            <div>{postInfo.content.subtitle}</div>
        </div>
        </div>
    )
}

export default MediumList