import React from 'react';
import './LandingBtn.css';
import { Link } from "react-scroll";

const LandingBtn = () => {
  return (
    <div className="btn-container">
      <Link className="landing-btn" to="projects" smooth={true}>
          SEE FOR YOURSELF
      </Link>
      <span className="under-btn">H</span>
    </div>
  )
};

export default LandingBtn;