import React from 'react'
import '../css/custom.css'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'
import ChinaKevin from '../images/kevinPics/ChinaKevin.jpg'
import MainComponent from '../components/MainComponent'


// index is my root/entry point

const Index = () => {

  return (
    <Layout pageTitle='Welcome.'>
        <MainComponent />
        <div className="medium-box">
        <div className="medium-header">My Recent Tech Blogs:</div>
            <MediumComponent />
        </div>
    </Layout>
  )}


export default Index
