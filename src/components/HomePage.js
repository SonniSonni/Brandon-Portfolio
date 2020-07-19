import React from 'react';
import Header from './Header';
import Hero from './Hero';
import GalleryPrev from './GalleryPrev';

export default class PortfolioApp extends React.Component{
  render(){
    return(
      <div>
        <Hero />
        <GalleryPrev />
      </div>
    );
  };
};