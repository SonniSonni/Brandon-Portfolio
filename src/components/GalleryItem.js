import React from 'react';
import Github from '../../resources/github-logo.png'

const GalleryItem = (props) => (
      <div id="gallery-item">
        <img src={props.imgSrc} alt="Preview of website"/>
        <h3> {props.title} </h3>
        <img src={Github} alt="git logo"/>
        <p> {props.description} </p>
      </div>
);

export default GalleryItem;