import React from 'react';
import Layout from '../components/Layout.js';
import ProjectList from '../components/ProjectList';
import { ProjectSliceContainer } from '../components/StyledProjectListComponent';

import { projects } from '../data/project_data';
import { StaticImage } from 'gatsby-plugin-image'


const Projects = () => {

    return(
        <Layout pageTitle="Kevin's Projects">
        <ProjectSliceContainer>
            {projects.map((singleProject) => (
             <ProjectList key={singleProject.title} singleProject={singleProject} />
            ))}
         <div className="project-cloud-wrapper">
         <StaticImage 
            src= "../images/kevinPics/bigCloud.png"
            alt= "big cloud"
            className="project-cloud"
            />
        </div>
        </ProjectSliceContainer>
        </Layout>
    )
}

export default Projects
