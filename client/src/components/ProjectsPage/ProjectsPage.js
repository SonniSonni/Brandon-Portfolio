import React from 'react';
import './ProjectsPage.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const slide = () => {
  const container = document.querySelector(".projects-container");
  container.style.left = container.style.left + 10;
};

const ProjectsPage = () => (
  <section id="projects" className="projects-page">
    <h2 className="projects-title full">Projects</h2>
    <section className="projects-container">
      <div id="car1" className="car show">
        <ProjectCard /> 
        <ProjectCard /> 
        <ProjectCard />
      </div>
      <div id="car2" className="car hide">
        <ProjectCard /> 
        <ProjectCard /> 
        <ProjectCard /> 
      </div>
      <ul className="car-menu">
        <li><span className="dot active-dot"></span></li>
        <li><span className="dot"></span></li>
      </ul>
    </section>
  </section>
);

export default ProjectsPage;