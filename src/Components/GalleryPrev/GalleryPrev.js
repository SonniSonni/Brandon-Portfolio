import React from 'react';
import './GalleryPrev.css';
import { Link } from 'react-router-dom';
import GalleryItem from '../GalleryItem/GalleryItem';
import ProjectList from '../../ProjectList';

const GalleryPrev = () => (
  <div className="gallery-prev">
    <h1>Gallery Preview</h1>
    <hr />
      <div className="gallery">
        <GalleryItem {...ProjectList[0]}/>
        <GalleryItem />
        <GalleryItem />
      </div>
    <hr />

    <div className="btn-container">
      <Link to="/portfolio" className="see-more">See more</Link>
    </div>
  </div>
);

export default GalleryPrev;