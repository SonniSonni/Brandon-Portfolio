import React from 'react';
import './ProjectCard.css';
import greg from '../../resources/grg.PNG';
import link from '../../resources/link-ico.png';
import git from '../../resources/git-ico.png';

const ProjectCard = (props) => (
  <div className="card-container">
    <img src={greg} alt=""/>
    <div className="card-desc">
      <h3 className="card-title">JULES TREMBLY</h3>
      <div className="desc-contianer">
        <p className="card-description">Music producer client personal site</p>
        <ul className="tech-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>REACT</li>
          <li>NODEJS</li>
          <li>EXPRESS</li>
          <li>MULTER</li>
          <li>MONGODB</li>
        </ul>
      </div>
      <div className="icons">
        <img src={git} alt=""/>
        <img src={link} alt=""/>     
      </div>
    </div>
  </div>
);

export default ProjectCard;