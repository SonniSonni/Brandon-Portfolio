import React from 'react';
import Github from '../../resources/github-logo.png'

const GalleryItem = (props) => (
      <div id="gallery-item">
        <img src={props.imgSrc} alt="Preview of website" id="proj-prev"/>
        <div id='flex-container'>
          <h3> {props.title} </h3>
          <p> {props.description} </p>
          <img src={Github} alt="git logo" id="github-logo"/>     
        </div> 
      </div>
);

export default GalleryItem;