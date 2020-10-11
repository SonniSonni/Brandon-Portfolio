import React from 'react';
import './GalleryItem.css';
import github from '../../Resources/GitHub-Mark-64px.png';

const GalleryItem = (props) => (
  <div className="gallery-item">
    <div className="image">
      <a className="project-display" href={props.link} target="__blank">
        <img className="project-img" src={props.image} alt="Project"/>
        <div className="overlay">
          <h3 className="overlay-title">{props.title}</h3>
        </div>
      </a>
    </div>
    
    <div className="content">
      <h3 className="title">{props.title}</h3>
      <a href={props.github} target="_blank" className={"github-a", props.github ? '' : 'disable'}>
        <img className="github-img" src={github}alt="Github logo" />
      </a>
      <p className="description">{props.description}</p>
    </div>
  </div>
);

export default GalleryItem;