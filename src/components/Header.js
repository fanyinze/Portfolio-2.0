import React from 'react';
import resume from './assets/Resume.pdf';

const Header = () => (
  <div className="header">
    <header>
      <div className="nav-wrap">
      <a href="#about" className="header__nav">About Me</a>
      <a href="#work" className="header__nav">Project</a>
      <a href="#contact" className="header__nav">Contact</a>
      <a href={resume} target="_blank" className="header__nav">Resume</a>
      </div>
      <div className="title-wrap">
        <div className="typewriter">
          <h1 className="title-line-one">Hi, I'm Yinze,</h1>
          <h2 className="title-line-two">I build website.</h2>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
