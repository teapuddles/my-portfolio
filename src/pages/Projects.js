import React from 'react';
import Layout from '../components/Layout.js';
import ProjectList from '../components/ProjectList';
import { ProjectSliceContainer } from '../components/StyledProjectListComponent';

import { projects } from '../data/project_data';

const Projects = () => {

    // Modal needs to be made on this level so that
    // the modal doesn't pop up inside my styled project component.

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
