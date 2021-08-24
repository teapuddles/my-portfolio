import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import smallCloud from '../images/kevinPics/smallCloud.png'

const MainComponent = (props) => {

    return(
        <>
        <div className="cloud-wrapper">
            <StaticImage 
            src= "../images/kevinPics/smallCloud.png"
            alt= "cloud"
            className="small-cloud"
            />
        </div>
        <div className="main-image-wrapper">
        <div className="landing-image-container" >
        <Link to="/about">
            <StaticImage 
            src="../images/kevinPics/ChinaKevin.jpg"
            alt="kevin at HuangShan"
            className="landing-image"
            />
            {/* <img key={props.homeImage} 
             src={props.homeImage} 
             alt={props.title} 
             className='landing-image' 
            >
            </img> */}
            </Link>
        </div>
        </div>
        </>
    )
}

export default MainComponent