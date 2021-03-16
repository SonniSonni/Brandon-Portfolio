import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import LandingBtn from '../LandingBtn/LandingBtn';
import LandingStripe from '../../Resources/landing-stripe.svg';
import logo from '../../Resources/brandon-logo2.svg';

const LandingPage = () => {
  return(
  <div id="home" className="landing">

    <Header />
    <div className="logo-title">
      <img src={logo} alt="" className="landing-logo"/>
      {/* <StyledLogo className="landing-logo"/> */}
      <h1 className="landing-title">Your internet presence <br /><span className="matters">Matters</span></h1>
    </div>

    <div className="bottom-landing">
      <img src={LandingStripe} alt="landing-stripe" className="landing-stripe"/>
      <div className="desc-btn">  
        <h2 className="landing-desc">Invest in someone who will treat it like it does. <br />My mission is to always deliver quality results that will overshadow the rest. </h2>
        <LandingBtn />
      </div>
    </div>   
    
  </div>
  )
};

 

export default LandingPage;