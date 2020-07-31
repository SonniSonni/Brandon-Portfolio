import React from 'react';
import EmailBox from './EmailBox';
import MessageBox from './MessageBox';

const ContactContainer = () => (
  <div id="contact-container">
    <h1>Contact Me</h1>
    <EmailBox />
    <MessageBox />
  </div>
);

export default ContactContainer;