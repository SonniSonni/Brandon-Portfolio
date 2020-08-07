import React from 'react';

const MessageBox = () => (
  <div id="message-box">
    <h2>Message me right here!</h2>
    <div id="message-flex-container">
      <input type='text'/>
      <input type='email'/>
      <textarea></textarea>
      <input className="button-style" type='submit' value='Send' />
    </div>
  </div>
);

export default MessageBox;