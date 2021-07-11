import React from 'react'

const MediumList = (props) => {

    const postInfo = props.post.node
    console.log(postInfo)

    return(
        <div className="medium-slice" >
            <a className='post-title' href={`https://medium.com/@teapuddles/${postInfo.uniqueSlug}`}>{postInfo.title}</a>
            <div className='post-content'>{postInfo.content.subtitle}</div>
        </div>
    )
}

export default MediumList