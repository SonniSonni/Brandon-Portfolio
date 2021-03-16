import React from 'react';
import Brandon from '../../Resources/BRANDON.svg';
import Schaen from '../../Resources/SCHAEN.svg';
import Line1 from '../../Resources/Line2.svg';
import Line2 from '../../Resources/Line3.svg';
import Line3 from '../../Resources/Line4.svg';
import "./StyledLogo.css";

const StyledLogo = () => (
  <div className="logo-container">
    <div className="top-logo">
      <img className="brandon" src={Brandon} alt="Brandon"/>
      <img className="line-2" src={Line2} alt="line"/>
    </div>
    
    <img className="line-1" src={Line1} alt="line"/>

    <div className="bottom-logo">
      <img className="line-3" src={Line3} alt="line"/>
      <img className="schaen" src={Schaen} alt="schaen"/>
    </div>
  </div>
)

export default StyledLogo;