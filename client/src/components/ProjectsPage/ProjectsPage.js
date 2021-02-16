import React from 'react';
import './ProjectsPage.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const dotSelect = (e) => {
  console.log(e.target.id);
  if(e.target.id === "dot1"){
    document.querySelector('#car1').className = "car show";
    document.querySelector("#dot1").className = "dot active-dot";
    document.querySelector('#car2').className = "car hide";
    document.querySelector("#dot2").className = "dot";
  }
  if(e.target.id === "dot2"){
    document.querySelector('#car2').className = "car show";
    document.querySelector("#dot2").className = "dot active-dot";
    document.querySelector('#car1').className = "car hide";
    document.querySelector("#dot1").className = "dot";
  }
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
        <li>
          <span onClick={dotSelect} id="dot1" className="dot active-dot"></span>
        </li>
        <li>
          <span onClick={dotSelect} id="dot2" className="dot"></span>
        </li>
      </ul>
    </section>
  </section>
);

export default ProjectsPage;