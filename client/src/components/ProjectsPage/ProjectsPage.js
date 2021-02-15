import React from 'react';
import './ProjectsPage.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectsPage = () => (
  <section id="projects" className="projects-page">
    <h2 className="projects-title">Projects</h2>
    <section className="projects-container">
      <ProjectCard /> 
      <ProjectCard /> 
      <ProjectCard /> 
    </section>
  </section>
);

export default ProjectsPage;