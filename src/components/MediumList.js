import React from 'react'

const MediumList = (props) => {

    const postInfo = props.post.node

    return(
        <div className="medium-slice" >
            <a className='post-title' href={`https://medium.com/@teapuddles/${postInfo.uniqueSlug}`}>{postInfo.title}</a>
            <div className='post-content'>{postInfo.content.subtitle}</div>
            <div className='post-date'>{postInfo.createdAt}</div>
        </div>
    )
}

export default MediumList