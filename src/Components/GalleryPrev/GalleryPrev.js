import React from 'react';
import './GalleryPrev.css';
import { Link } from 'react-router-dom';
import GalleryItem from '../GalleryItem/GalleryItem';

const GalleryPrev = () => (
  <div className="gallery-prev">
    <h1>Gallery Preview</h1>
    <hr />
      <div className="gallery">
        <GalleryItem />
      </div>
    <hr />
    <div className="btn-container">
      <Link className="see-more">See more</Link>
    </div>
  </div>
);

export default GalleryPrev;