import React from 'react'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'
import GbiBridged from './bg-image'


const App = () => {

    return(
        <Layout pageTitle='Kevin Gleeson'>
            <div className="medium-box">
                <MediumComponent />
            </div>
        </Layout>
    )
}


export default App