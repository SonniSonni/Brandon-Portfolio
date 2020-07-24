import React from 'react';
import GalleryItem from './GalleryItem';

export default class PortfolioContainer extends React.Component{
    render(){
        return(
        <div>
            <h1>My Work</h1>
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
        </div>
    )}
};

export default PortfolioContainer;