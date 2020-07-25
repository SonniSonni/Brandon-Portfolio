import React from 'react';
import GalleryItem from './GalleryItem';

export default class GalleryPrev extends React.Component {
 render() {
   return(
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
   )
 }
};