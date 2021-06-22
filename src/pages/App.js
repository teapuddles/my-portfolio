import React from 'react'
import { projects } from '../data/project_data'
import ProjectList from '../components/ProjectList'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/Layout.js'


const App = () => {

    // const [showProject, setShowProject] = useState(false)
    // // you're going to create the projectpage component onClick with a ternary useState(boolean)

    const handleProjectClick = () => {
        console.log("hi")
    }

    return(
        <Layout pageTitle='Kevin Gleeson'>
        <div className="app">
        <div className="project-circle">
        <div className="project-slice-container">
        {projects.map((singleProject) => (
            <ProjectList key={singleProject.title} singleProject={singleProject} handleProjectClick={handleProjectClick}/>
          ))}
        </div>
        </div>
        <div className="medium-box">
            <MediumComponent />
        </div>
        </div>
        </Layout>
    )
}


export default App