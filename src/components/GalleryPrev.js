import React from 'react';
import GalleryItem from './GalleryItem';
import CoffeeExpress from '../../resources/CoffeeExpress.png';

export default class GalleryPrev extends React.Component {
 constructor(props) {
   super (props);
   this.state = {
    coffeeExpress: {id: 0, title: 'Coffee Express', imgSrc: CoffeeExpress, description: 'A mock up website for a coffee shop'}
   }
 }
 render() {
   return(
    <div id="gallery-prev">
      <h2>Gallery</h2>
      <hr />
      <ul>
        <li> <GalleryItem title={this.state.coffeeExpress.title} imgSrc={this.state.coffeeExpress.imgSrc} description={this.state.coffeeExpress.description}/> </li>
        <li> <GalleryItem /> </li>
        <li> <GalleryItem /> </li>
      </ul>
      <hr />
    </div>
   )
 }
};