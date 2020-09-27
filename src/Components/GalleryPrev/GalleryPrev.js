import React from 'react';
import './GalleryPrev.css';
import GalleryItem from '../GalleryItem/GalleryItem';

const GalleryPrev = () => (
  <div className="GalleryPrev">
    <h1>Gallery Preview</h1>
    <hr />
      <div className="Gallery">
        <GalleryItem />
      </div>
    <hr />
  </div>
);

export default GalleryPrev;