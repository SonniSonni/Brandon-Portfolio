import React from 'react';
import GithubLogo from '../../resources/github-logo.png';
import LinkedLogo from '../../resources/linkdin-logo.png';
import EmailLogo from '../../resources/email-logo.svg';

const EmailBox = () => (
  <div id="email-box">
    <div id="email-title">
      <h2>Email Me</h2>
      <img src={EmailLogo}/>
    </div>
    <p id="email-text">BrandonLSchaen@gmail.com</p>
    <p id="email-blurb">Always looking for new opportunities!</p>
    <div id="img-flex-container">
      <a target="_blank" href="https://github.com/KamajiiSC"><img src={GithubLogo}/></a>
      <a target="_blank" href="https://www.linkedin.com/in/brandon-schaen-53764216a/"><img src={LinkedLogo}/></a>
    </div>
  </div>
);

export default EmailBox;