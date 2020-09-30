import React from 'react';
import './GalleryItem.css';

const GalleryItem = (props) => (
  <div className="gallery-item">
    <img />
    <div className="content">
      <h3 className="title"></h3>
      <a href="#" target="_blank" className="github-a"><img className="github-img" /></a>
      <p className="description"></p>
    </div>
  </div>
);

export default GalleryItem;