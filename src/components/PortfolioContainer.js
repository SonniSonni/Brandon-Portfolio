import React from 'react';
import GalleryItem from './GalleryItem';
import CoffeeExpress from '../../resources/CoffeeExpress.png';

const coffeeExpress = 
{
    id: 0, 
    title: 'Coffee Express', 
    imgSrc: CoffeeExpress, 
    description: 'A mock up website for a coffee shop', 
    githubLink:'https://github.com/KamajiiSC/CoffeeExpress'
}

export default class PortfolioContainer extends React.Component{
    render(){
        return(
        <div id="portfolio-container" className="box-container">
            <h1>My Work</h1>
            <ul>
                <li><GalleryItem {...coffeeExpress}/></li>
                <li><GalleryItem {...coffeeExpress}/></li>
                <li><GalleryItem {...coffeeExpress}/></li>
                <li><GalleryItem {...coffeeExpress}/></li>
                <li><GalleryItem {...coffeeExpress}/></li>
                <li><GalleryItem {...coffeeExpress}/></li>
            </ul>
        </div>
    )}
};