import React from 'react';
import './ProjectsPage.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import greg from '../../resources/grg.PNG';
import fashion from '../../resources/fashion.PNG';
import corner from '../../resources/cornertri.svg';

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
        <ProjectCard title="JULES TREMBLY" img={greg} description="Music producer client personal site" /> 
        <ProjectCard img={fashion} title="ARMON GUTIERRA" description="Fashion designer concept website."/> 
        <ProjectCard title="JULES TREMBLY" img={greg} description="Music producer client personal site" />
      </div>
      <div id="car2" className="car hide">
        <ProjectCard img={fashion} title="ARMON GUTIERRA" description="Fashion designer concept website."/> 
        <ProjectCard title="JULES TREMBLY" img={greg} description="Music producer client personal site" /> 
        <ProjectCard img={fashion} title="ARMON GUTIERRA" description="Fashion designer concept website."/> 
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
    <img src={corner} alt="triangle decoration" className='corner-tri' />
  </section>
);

export default ProjectsPage;