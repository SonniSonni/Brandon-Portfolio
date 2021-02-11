import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import LandingBtn from '../LandingBtn/LandingBtn';

const LandingPage = () => (
  <div className="landing">
    <Header />
    <img src="" alt="Brandon Schaen logo" className="landing-logo"/>
    <h1 className="landing-title">Your internet presence <span className="matters">Matters</span></h1>
    <h2 className="landing-desc">Invest in someone who will treat it like it does. 
My mission is to always deliver quality results that will overshadow the rest. </h2>
    <LandingBtn />
  </div>
);

export default LandingPage;