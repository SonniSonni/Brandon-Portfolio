import React from 'react';
import './ContactPage.css';
import git from '../../resources/git-ico.png';
import linkedin from '../../resources/linked-logo.png';

const ContactPage = () => (
  <section id="contact" className="contact-page">
    <h2 className="contact-title">Contact</h2>
    <section className="form-container">
      <form className="contact-form" action="">
        <label htmlFor="name-input">Name</label>
        <input type="text" name="name-input" id="name-input"/>

        <label htmlFor="email-input">Email</label>
        <input type="email" name="email-input" id="email-input"/>

        <label htmlFor="message-input">Message</label>
        <textarea name="message-input" id="message-input" cols="30" rows="10"></textarea>

        <section className="social-submit">
          <section className="socials">
            <img src={git} alt=""/>
            <img src={linkedin} alt=""/>
          </section>
          
          <button id="submit-btn" type="button">SAY HI</button>
        </section>
      </form>
    </section>
  </section>
);

export default ContactPage;