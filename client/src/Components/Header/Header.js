import React, { Component } from 'react';
import './Header.css';
import headerImg from '../../Resources/headerImg.png';
import ham from '../../Resources/ham.png';
import { NavLink } from 'react-router-dom';

export default class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isHam: 'hidden'
    };
  }
  render(){
    return(
  <div className="header">
    <img src={headerImg} alt="Brandon Schaen" className="header-img"/>
    <nav  className={this.state.isHam ? "" : "hidden" }>
      <ul className="nav-list">
        <li> <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink> </li>
        <li> <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink> </li>
        <li> <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink> </li>
        <li> <NavLink to="/contact" className="nav-link contact" activeClassName="active">Contact</NavLink> </li>
      </ul>
    </nav>
    <button onClick={() => {
      if(this.state.isHam === "hidden"){
        this.setState({isHam:""})  
      }
      else{
        this.setState({isHam:"hidden"})  
      }
    }} 
      className={'ham-btn'} aria-expanded="false" aria-controls="menu"> 
      <img src={ham} alt="menu" className="ham" />
    </button> 
  </div>
  )
  }
};
