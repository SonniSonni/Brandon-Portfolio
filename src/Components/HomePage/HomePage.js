import React from 'react';
import './HomePage.css';
import Hero from '../../Resources/hero.png';
import GalleryPrev from '../GalleryPrev/GalleryPrev';

const HomePage = () => (
  <div className="home-page">
      <img src={Hero} alt="Man infront of city skyline" className="hero"/>
    <GalleryPrev />
  </div>
);

export default HomePage;