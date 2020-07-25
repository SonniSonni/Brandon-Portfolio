import React from 'react';
import GalleryItem from './GalleryItem';
import Hero from '../../resources/Hero.png';

export default class PortfolioContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
         coffeeExpress: {id: 0, title: 'Coffee Express', imgSrc: Hero, description: 'A mock up website for a coffee shop'}
         
        };
    }
    render(){
        return(
        <div>
            <h1>My Work</h1>
            <GalleryItem title={this.state.coffeeExpress.title} imgSrc={this.state.coffeeExpress.imgSrc} description={this.state.coffeeExpress.description}/>
        </div>
    )}
};
