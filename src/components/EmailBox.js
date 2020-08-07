import React from 'react';
import GithubLogo from '../../resources/github-logo.png';

const EmailBox = () => (
  <div id="email-box">
    <h2>Email Me</h2>
    <p id="email-text">BrandonLSchaen@gmail.com</p>
    <p id="email-blurb">Always looking for new opportunities!</p>
    <a><img src={GithubLogo}/></a>
    <a><img /></a>
  </div>
);

export default EmailBox;