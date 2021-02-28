import React from 'react';
import './ContactPage.css';
import git from '../../resources/git-ico.png';
import linkedin from '../../resources/linked-logo.png';
import twitter from '../../resources/twitter-icon.png';
import ReactDom from 'react-dom';

// Error messages
const errorMessage = "There was a problem submitting your message";
const errorMessageName = "Please include your name!";
const errorMessageEmail = "Please include your email address!";
const errorMessageMsg = "Please include a message!";

// Message to display after submit
const completedForm = "Thank you for your message!";

const formSubmit = (e) =>{
  let name = document.getElementById("name-input");
  let email = document.getElementById("email-input");
  let message = document.getElementById("message-input");
  let emailVal = /.{1,}@[^.]{1,}/;
  let emailCheck = emailVal.exec(message.input);
  console.log(email.value);

  // Check if the inputs have actual value
  if(name.value.trim() !== '' && emailCheck && message.value.trim() !== ''){
    console.log("pass");
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
  } 
  if(name.value.trim() !== ''){
    ReactDom.render('', document.getElementById('error-message-name'))
  }
  else{
    ReactDom.render(errorMessageName, document.getElementById('error-message-name'))
  }
    // If email is missing set error message
  if(emailCheck){
    ReactDom.render('', document.getElementById('error-message-email'))
  }
  else{
    ReactDom.render(errorMessageEmail, document.getElementById('error-message-email'))
  }

  // If message is missing set error message
  if(message.value.trim() !== ''){
    ReactDom.render('', document.getElementById('error-message-msg'))
  }
  else{
    ReactDom.render(errorMessageMsg, document.getElementById('error-message-msg'))
  }
}

const ContactPage = () => (
  <section id="contact" className="contact-page">
    <h2 className="contact-title">Contact</h2>
    <section className="form-container">

      <form id="contact-form" className="contact-form" action="">
        <div>
          <div id="error-message-name"></div>
          <div className="input-container">
            <label htmlFor="name-input">Name</label>
            <input required pattern="\S.*\S" title="Must not be left blank" type="text" name="name-input" id="name-input"/>
          </div>
        </div>
        <div >
          <div id="error-message-email"></div>
          <div className="input-container">
            <label htmlFor="email-input">Email</label>
            <input required type="email" name="email-input" id="email-input"/>
          </div> 
        </div>
        <div >
          <div id="error-message-msg"></div>
          <div className="input-container">
            <label htmlFor="message-input">Message</label>
            <textarea required name="message-input" id="message-input" cols="10" rows="5"></textarea>
          </div>
        </div>
        <section className="social-submit">
          <section className="socials">
            <a rel="noopener noreferrer" href="https://github.com/KamajiiSC" target="_blank"><img src={git} alt=""/></a>  
            <a href="https://www.linkedin.com/in/brandon-schaen/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=""/></a>
            <a href="https://twitter.com/KamajiiJeesh" target="_blank" rel="noopener noreferrer"><img src={twitter} alt=""/></a>
          </section>
          
          <button type="button" id="submit-btn" onClick={formSubmit}>Send</button>
        </section>
      </form>

    </section>
  </section>
);

export default ContactPage;