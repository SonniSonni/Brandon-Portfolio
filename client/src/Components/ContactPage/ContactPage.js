import React from 'react';
import './ContactPage.css';
import github from '../../Resources/GitHub-Mark-64px.png';
import link from '../../Resources/LI-In-Bug.png';
import ReactDom from 'react-dom';

// Error messages
const errorMessage = "There was a problem submitting your message";
const errorMessageName = "Please include your name!";
const errorMessageEmail = "Please include your email address!";
const errorMessageMsg = "Please include a message!";

// Message to display after submit
const completedForm = "Thank you for your message!";

const formSubmit = (e) =>{
  let name = document.getElementById("name");
  let email = document.getElementById("email-add");
  let message = document.getElementById("message");
  console.log(email.value);
  // Check if the inputs have actual value
  if(name.value.trim() !== '' && email.value.trim() !== '' && message.value.trim() !== ''){
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
    .then((response) => {
      // Throws error if network error or such
      if(response.ok){
        response.json();
      } else {
        throw new Error("Oh no something went wrong!");
      }
    })
    .then(json => console.log(json))
    .catch((error) => {
      // Renders error
      console.log(error);
      ReactDom.render(errorMessage, document.getElementById('error-message'))
    });
    e.preventDefault();

    // Clear out form values
    Array.from(document.querySelectorAll("input")).forEach(input => (input.value= ''));
    Array.from(document.querySelectorAll("textarea")).forEach(textarea => (textarea.value= ''));

    // Rerender form with just text
    ReactDom.render(completedForm, document.getElementById('contact-form'))

    // If name is missing set error message
  } else if(name.value.trim() === ''){
    ReactDom.render(errorMessageName, document.getElementById('error-message-name'))
  }

    // If email is missing set error message
  else if(email.value.trim() === ''){
    ReactDom.render(errorMessageEmail, document.getElementById('error-message-email'))
  }

  // If message is missing set error message
  else if(message.value.trim() === ''){
    ReactDom.render(errorMessageMsg, document.getElementById('error-message-msg'))
  }
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
          <form id="contact-form" className="contact-form">
            <div id="error-message"></div>
            <div className="name-cont">
              <div id="error-message-name"></div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="email-cont">
              <div id="error-message-email"></div>
              <label htmlFor="emailAdd">Email: </label>
              <input type="email" name="emailAdd" id="email-add" required/>
            </div>
            <div className="messg-cont">
              <div id="error-message-msg"></div>
              <label htmlFor="message">Message: </label>
              <textarea name="message" id="message" cols="30" rows="10" required></textarea>
            </div>
            <button id="submit-btn" type="button" onClick={formSubmit}>Send</button>
          </form>
        </div>

      </div>
    </div>
  </div>
);



export default ContactPage;