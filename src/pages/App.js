import React from 'react'
import { projects } from '../data/project_data'
import ProjectList from '../components/ProjectList'
import MediumComponent from '../components/MediumComponent'
import Layout from '../components/layout'


const App = () => {

    // const [showProject, setShowProject] = useState(false)
    // // you're going to create the projectpage component onClick with a ternary useState(boolean)

    // const handleProjectClick = () => {
    //     setShowProject(!showProject)
    // }

    return(
        <Layout pageTitle='Kevin Gleeson'>
        <div className="app">
        <div className="project-circle">
        <div className="project-slice-container">
        {projects.map((project) => (
            <ProjectList key={project.title} project={project} />
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