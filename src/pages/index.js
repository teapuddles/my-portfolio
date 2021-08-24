import React from 'react'
import '../css/custom.css'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'
import MainComponent from '../components/MainComponent'


// index is my root/entry point

const Index = () => {
  

  return (
    <Layout pageTitle='Welcome.'>
          <MainComponent />
        <div className="medium-box">
          <MediumComponent />
        </div>
    </Layout>
  )}


export default Index

