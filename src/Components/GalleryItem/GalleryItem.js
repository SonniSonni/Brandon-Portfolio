import React from 'react';
import './GalleryItem.css';
import github from '../../Resources/GitHub-Mark-64px.png';

const GalleryItem = (props) => (
  <div className="gallery-item">
    <div className="image">
      <img className="project-img" src={props.image} alt="Image of project"/>
    </div>
    
    <div className="content">
      <h3 className="title">{props.title}</h3>
      <a href={props.github} target="_blank" className="github-a">
        <img className="github-img" src={github}alt="Github logo" />
      </a>
      <p className="description">{props.description}</p>
    </div>
  </div>
);

export default GalleryItem;