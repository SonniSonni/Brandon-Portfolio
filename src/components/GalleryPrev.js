import React from 'react';
import GalleryItem from './GalleryItem';
import ProjectList from '../ProjectList';

const coffeeExpress = ProjectList[0];

export default class GalleryPrev extends React.Component {
 render() {
   return(
    <div id="gallery-prev">
      <h1>Gallery</h1>
      <hr />
      <ul>
        <li> <GalleryItem {...coffeeExpress}/> </li>
        <li> <GalleryItem {...coffeeExpress}/> </li>
        <li> <GalleryItem {...coffeeExpress}/> </li>
      </ul>
      <hr />
      <button className="button-style">See More</button>
    </div>
   )
 }
};