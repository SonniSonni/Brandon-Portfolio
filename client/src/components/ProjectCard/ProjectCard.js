import React from 'react';
import './ProjectCard.css';
import greg from '../../resources/grg.PNG';

const ProjectCard = (props) => (
  <div className="card-container">
    <img src={greg} alt=""/>
    <div className="card-desc">
      <h3 className="card-title"></h3>
      <p className="card-description"></p>
      <ul className="tech-list">

      </ul>
      <div className="icons"></div>
    </div>
  </div>
);

export default ProjectCard;