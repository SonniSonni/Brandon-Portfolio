import React from 'react';
import GalleryItem from './GalleryItem';
import ProjectList from '../ProjectList';

const coffeeExpress = ProjectList[0];
const pokeTeam = ProjectList[1];

export default class PortfolioContainer extends React.Component{
    render(){
        return(
        <main id = 'portf-wrapper'>
            <div id="portfolio-container" className="box-container">
                <h1>My Work</h1>
                    <div id = 'gallery-List'>
                        <GalleryItem {...coffeeExpress}/>
                        <GalleryItem {...pokeTeam}/>
                        <GalleryItem {...coffeeExpress}/>
                        <GalleryItem {...coffeeExpress}/>
                        <GalleryItem {...coffeeExpress}/>
                        <GalleryItem {...coffeeExpress}/>
                    </div>
            </div>
        </main>
    )}
};