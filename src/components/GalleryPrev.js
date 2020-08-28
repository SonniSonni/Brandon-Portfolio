import React from 'react';
import { Link } from 'react-router-dom';
import GalleryItem from './GalleryItem';
import ProjectList from '../ProjectList';

const coffeeExpress = ProjectList[0];
const pokeTeam = ProjectList[1];

export default class GalleryPrev extends React.Component {
 render() {
   return(
    <div id="gallery-prev">
      <h1>Gallery</h1>
      <hr />
      <ul>
        <li> <GalleryItem {...coffeeExpress}/> </li>
        <li> <GalleryItem {...pokeTeam}/> </li>
        <li> <GalleryItem {...coffeeExpress}/> </li>
      </ul>
      <hr />
      <Link className="button-style" to="/PortfolioPage"> See More</Link>
      
    </div>
   )
 }
};