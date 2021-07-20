import React from 'react'

import smallCloud from '../images/kevinPics/smallCloud.png'

const MainComponent = (props) => {

    console.log(props)

    return(
        <div className='main-wrapper'>
        <div className="cloud-wrapper">
            <img key={smallCloud}
                src={smallCloud}
                alt={"cloud"}
                className="small-cloud"
            >
            </img>
        </div>
        <div className="main-image-wrapper">
        <div className="landing-image-container" >
            <img key={props.homeImage} 
             src={props.homeImage} 
             alt={props.title} 
             className='landing-image' 
            >
            </img>
        </div>
        </div>
        </div>
    )
}

export default MainComponent