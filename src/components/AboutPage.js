import React from 'react';
import Footer from './Footer.js';
import AboutContainer from './AboutContainer.js';

export default class AboutPage extends React.Component {
    render(){
        return(
            <div>
                <AboutContainer />
                <Footer />
            </div>
        )
    }
};