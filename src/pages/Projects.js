import React from 'react';
import Layout from '../components/Layout.js';
import ProjectList from '../components/ProjectList';
import { ProjectSliceContainer } from '../components/StyledProjectListComponent';

import { projects } from '../data/project_data';
import bigCloud from '../images/kevinPics/bigCloud.png'


const Projects = () => {

    return(
        <Layout pageTitle="Kevin's Projects">
        <ProjectSliceContainer>
            {projects.map((singleProject) => (
             <ProjectList key={singleProject.title} singleProject={singleProject} />
            ))}
         <div className="project-cloud-wrapper">
         <img key={bigCloud} 
             src={bigCloud} 
             alt={'big cloud'} 
             className='project-cloud' 
            >
            </img>
        </div>
        </ProjectSliceContainer>
        </Layout>
    )
}

export default Projects
