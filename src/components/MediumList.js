import React from 'react'

const MediumList = (props) => {

    const postInfo = props.post.node

    return(
        <div className="medium-slice" >
            <div className='post-title'>{postInfo.title}</div>
            <div className='post-content'>{postInfo.content.subtitle}</div>
        </div>
    )
}

export default MediumList