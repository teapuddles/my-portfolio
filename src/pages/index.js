import React from 'react'
import '../css/custom.css'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'
import MainComponent from '../components/MainComponent'

import { StaticImage } from 'gatsby-plugin-image'

// index is my root/entry point

const Index = () => {
  

  return (
    <Layout pageTitle='Welcome.'>
      <div className="cloud-wrapper">
            <StaticImage 
            src= "../images/kevinPics/smallCloud.png"
            alt= "cloud"
            className="small-cloud"
            placeholder="none"
            />
        </div>
      <div className="main-component-layout">
          <MainComponent />
        <div className="medium-box">
          <MediumComponent />
        </div>
      </div>
    </Layout>
  )}


export default Index

