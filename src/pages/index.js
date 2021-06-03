import React from 'react'
import { projects } from '../data/project_data.js'

const Index = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>BIENVINEDOS ALA PAGINA DE KEVIN GLEESON!</h1>
      <p>I'm making this in the Babylon Bean.</p>
      {projects.map((project) => (
        <li>{project.title}, {project.Description}, {project.githubLink}</li>
      ))}
    </main>
  )}

export default Index