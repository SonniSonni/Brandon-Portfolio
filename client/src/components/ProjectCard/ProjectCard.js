import React from 'react';
import './ProjectCard.css';
import link from '../../Resources/link-ico.png';
import git from '../../Resources/git-ico.png';

const ProjectCard = (props) => (
  <div className="card-container">
    <img className="card-img" src={props.img} alt="producer"/>
    <div className="card-desc">
      <h3 className="card-title">{props.title}</h3>
      <div className="desc-contianer">
        <p className="card-description">{props.description}</p>
        <ul className="tech-list">
          {props.techs.map(tech =>
            <li key={tech}>
              {tech}
            </li>
          )}
          {/* <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>REACT</li>
          <li>NODEJS</li>
          <li>EXPRESS</li>
          <li>MULTER</li>
          <li>MONGODB</li> */}
        </ul>
      </div>
      <div className="icons">
        {props.github ? <a target="#blank" href={props.github}><img className="icon-img" src={git} alt="github icon"/></a> : ""}
        {props.link ? <a target="#blank" href={props.link}><img className="icon-img" src={link} alt="link icon"/></a> : ""}  
      </div>
    </div>
  </div>
);

export default ProjectCard;