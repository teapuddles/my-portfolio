import React from 'react'
import '../css/custom.css'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'
import { assets } from '../data/project_data'
import MainComponent from '../components/MainComponent'


// index is my root/entry point

const Index = () => {
  

  return (
    <Layout pageTitle='Welcome.'>
      {assets.map((asset) => (
        <MainComponent 
          key={asset.title} 
          homeImage={asset.homeImage} 
          title={asset.title} />
        ))}
        <div className="medium-box">
        <div className="medium-header">My Recent Tech Blogs:</div>
          <MediumComponent />
        </div>
    </Layout>
  )}


export default Index
