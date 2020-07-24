import React from 'react';

const GalleryItem = (props) => (
      <div>
        <img src={props.imgSrc} alt="Preview of website"/>
        <h3> {props.title} </h3>
        <img src={"#"} alt="git logo"/>
        <p> {props.description} </p>
      </div>
);

export default GalleryItem;