import React from 'react';

const MessageBox = () => (
  <div id="message-box">
    <h2>Message me right here</h2>
    <form>
      <input type='text' placeholder='Name'/>
      <input type='email' placeholder='Email Address'/>
      <textarea placeholder='Message' />
      <input className="button-style" type='submit' value='Send' />
    </form>
  </div>
);

export default MessageBox;