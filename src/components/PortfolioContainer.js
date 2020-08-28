import React from 'react';
import GalleryItem from './GalleryItem';
import ProjectList from '../ProjectList';

const coffeeExpress = ProjectList[0];

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