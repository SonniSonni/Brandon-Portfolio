import React from 'react';
import Hero from './Hero';
import GalleryPrev from './GalleryPrev';
import Footer from './Footer';

export default class PortfolioApp extends React.Component{
  render(){
    return(
      <div>
        <Hero />
        <GalleryPrev />
        <Footer />
      </div>
    );
  };
};