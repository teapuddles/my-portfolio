import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const MainComponent = () => {

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
            </Link>
        </div>
        </div>
        </>
    )
}

export default MainComponent