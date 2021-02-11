import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import LandingBtn from '../LandingBtn/LandingBtn';

const LandingPage = () => (
  <div className="landing">
    <Header />
    <img src="" alt="Brandon Schaen logo" className="landing-logo"/>
    <h1 className="landing-title"></h1>
    <h2 className="landing-desc"></h2>
    <LandingBtn />
  </div>
);

export default LandingPage;