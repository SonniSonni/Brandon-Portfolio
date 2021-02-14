import React from 'react';
import Brandon from '../../resources/BRANDON.svg';
import Schaen from '../../resources/SCHAEN.svg';
import Line1 from '../../resources/Line2.svg';
import Line2 from '../../resources/Line3.svg';
import Line3 from '../../resources/Line4.svg';
import "./StyledLogo.css";

const StyledLogo = () => (
  <div className="logo-container">
    <img className="brandon" src={Brandon} alt="Brandon"/>
    <img className="schaen" src={Schaen} alt="schaen"/>
    <img className="line-1" src={Line1} alt="line"/>
    <img className="line-2" src={Line2} alt="line"/>
    <img className="line-3" src={Line3} alt="line"/>
  </div>
)

export default StyledLogo;