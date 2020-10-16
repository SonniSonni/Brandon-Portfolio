import React from 'react';
import './ContactPage.css';
import github from '../../Resources/GitHub-Mark-64px.png';
import link from '../../Resources/LI-In-Bug.png';

const formSubmit = (e) =>{
  let name = document.getElementById("name");
  let email = document.getElementById("email-add");
  let message = document.getElementById("message");
  console.log(email.value);
  fetch("https://brandon-schaen-portfolio.herokuapp.com/contact", {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json));

  e.preventDefault();
}

const ContactPage = () => (
  <div className="contact-page">
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="email-containers">

        <div className="email">
          <h2>Email Me!</h2>
          <div className="contact-info">
            <h3>BrandonLSchaen@gmail.com</h3>
            <p>Always looking for new opportunities!</p>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/KamajiiSC" target="_blank" rel="noopener noreferrer"> <img src={github} alt="Github Logo"/> </a>
            <a> </a>
            <a href="https://www.linkedin.com/in/brandon-schaen/" target="_blank" rel="noopener noreferrer"> <img src={link} alt="Linked-In Logo"/> </a>
          </div>
        </div>

        <div className="message">
          <h2>Message Me Here!</h2>
          <form className="contact-form">
            <div className="name-cont">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name"/>
            </div>
            <div className="email-cont">
              <label htmlFor="emailAdd">Email: </label>
              <input type="email" name="emailAdd" id="email-add"/>
            </div>
            <div className="messg-cont">
              <label htmlFor="message">Message: </label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <button id="submit-btn" type="button" onClick={formSubmit}>Send</button>
          </form>
        </div>

      </div>
    </div>
  </div>
);



export default ContactPage;