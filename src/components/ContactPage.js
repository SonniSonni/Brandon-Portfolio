import React from 'react';
import Footer from './Footer';
import ContactContainer from './ContactContainer'

export default class ContactPage extends React.Component {
  render(){
    return(
      <div>
        <ContactContainer />
        <Footer />
      </div>
    )
  }
}