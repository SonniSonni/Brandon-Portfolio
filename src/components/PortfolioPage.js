import React from 'react';
import Footer from './Footer.js';
import PortfolioContainer from './PortfolioContainer';

export default class PortfolioPage extends React.Component{
    render(){
        return(
            <div>
                <PortfolioContainer />
                <Footer />
            </div>
        );
    };
};