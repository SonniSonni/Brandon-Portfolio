import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryPrev = () => (
  <div>
    <h2>Gallery</h2>
    <hr />
    <ul>
      <li> <GalleryItem /> </li>
      <li> <GalleryItem /> </li>
      <li> <GalleryItem /> </li>
    </ul>
    <hr />
  </div>
);

export default GalleryPrev;