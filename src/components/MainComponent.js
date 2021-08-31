import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const MainComponent = () => {

    return(
        <>
        <div className="main-image-wrapper">
        <div className="landing-image-container" >
        <Link to="/about">
            <StaticImage 
            src="../images/kevinPics/ChinaKevin.jpg"
            alt="kevin at HuangShan"
            className="landing-image"
            placeholder="blurred"
            />
            </Link>
        </div>
        </div>
        </>
    )
}

export default MainComponent