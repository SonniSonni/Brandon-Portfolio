import React from 'react';
import portrait from '../../resources/test-headshot.jpg';

const AboutContainer = () => (
  <div id='about-container'>
    <h1>About Me</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor lorem, tempus vitae lorem at, lacinia cursus massa. Nulla facilisi. Vivamus accumsan mi non porttitor tempor. In egestas eu purus vel gravida. Aenean bibendum, sem nec auctor convallis, est ligula aliquam risus, in convallis ligula enim ut metus. Nam eu tellus rhoncus, eleifend risus vel, ullamcorper nunc. Phasellus nec turpis sit amet lacus accumsan vehicula. Quisque pharetra aliquam arcu nec imperdiet.
    </p>
    
    <label>See my resume here: </label> <button>See more</button>
    <img src={portrait}alt="Portrait of man"/>
  </div>
);

export default AboutContainer;