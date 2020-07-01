import React from 'react';
import Header from './Header';
import Hero from './Hero';

export default class PortfolioApp extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Hero />
      </div>
    );
  };
};