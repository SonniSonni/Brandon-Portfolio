import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import LandingBtn from '../LandingBtn/LandingBtn';
import Logo from '../../resources/brandon-logo.svg';
import LandingStripe from '../../resources/landing-stripe.svg';

const LandingPage = () => (
  <div id="home" className="landing">
    <Header />
    <div className="logo-title">
      <img src={Logo} alt="Brandon Schaen logo" className="landing-logo"/>
      <h1 className="landing-title">Your internet presence <br /><span className="matters">Matters</span></h1>
    </div>
    <div className="desc-btn">
      <h2 className="landing-desc">Invest in someone who will treat it like it does. My mission is to always deliver quality results that will overshadow the rest. </h2>
      <LandingBtn />
    </div>
    <img src={LandingStripe} alt="landing-stripe" className="landing-stripe"/>
  </div>
);

export default LandingPage;