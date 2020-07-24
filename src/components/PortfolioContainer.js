import React from 'react';
import GalleryItem from './GalleryItem';

export default class PortfolioContainer extends React.Component{
    state= {
        items: [
          {id: 0, title: 'Coffee Express'}
        ]
    }
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
