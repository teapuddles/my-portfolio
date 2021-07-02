import React from 'react'
import '../css/custom.css'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'
import GbiBridged from './bg-image'

// index is my root/entry point

const Index = () => {
  return (
    <Layout pageTitle='Welcome.'>
        <div className="medium-box">
            <MediumComponent />
        </div>
    </Layout>
  )}


export default Index
