import React from 'react';
import Layout from '../components/Layout.js';
import ProjectList from '../components/ProjectList';
import { ProjectSliceContainer } from '../components/StyledProjectListComponent';

import { projects } from '../data/project_data';

const Projects = () => {

    return(
        <Layout pageTitle="Kevin's Projects">
        <ProjectSliceContainer>
            {projects.map((singleProject) => (
             <ProjectList key={singleProject.title} singleProject={singleProject} />
            ))}
        </ProjectSliceContainer>
        </Layout>
    )
}

export default Projects
