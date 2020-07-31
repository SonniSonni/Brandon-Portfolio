import React from 'react';
import EmailBox from './EmailBox';
import MessageBox from './MessageBox';

const ContactContainer = () => (
  <div id="contact-container" class="box-container">
    <h1>Contact Me</h1>
    <div id="contact-flex-container">
      <div class="contact-box-container">
        <EmailBox />
      </div>
      <div class="contact-box-container">
        <MessageBox />
      </div>      
    </div>
  </div>
);

export default ContactContainer;