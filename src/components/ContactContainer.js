import React from 'react';
import EmailBox from './EmailBox';
import MessageBox from './MessageBox';

const ContactContainer = () => (
  <div id="contact-container" class="box-container">
    <h1>Contact Me</h1>
    <div id="contact-flex-container">
      <EmailBox class="contact-box-container"/>
      <MessageBox class="contact-box-container"/>
    </div>
  </div>
);

export default ContactContainer;