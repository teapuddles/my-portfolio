import React from 'react'
import '../css/custom.css'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'

// index is my root/entry point

const Index = () => {
  return (
    <Layout pageTitle='Welcome.'>
        <div className="medium-box">
        <div className="medium-header">My Recent Tech Blogs:</div>
            <MediumComponent />
        </div>
    </Layout>
  )}


export default Index
