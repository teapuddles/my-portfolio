import React from 'react'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'


const App = () => {

    return(
        <Layout pageTitle='Kevin Gleeson'>
        <div className="app">
        <div className="medium-box">
            <MediumComponent />
        </div>
        </div>
        </Layout>
    )
}


export default App