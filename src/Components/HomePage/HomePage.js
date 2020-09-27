import React from 'react';
import './HomePage.css';
import Hero from '../../Resources/hero.png';

const HomePage = () => (
  <div className="HomePage">
    <img src={Hero} alt="Man infront of city skyline" className="hero"/>
  </div>
);

export default HomePage;