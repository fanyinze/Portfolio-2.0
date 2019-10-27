import React from 'react';
import resume from './assets/Resume.pdf';

const Footer = () => (
  <footer>
  <div className="footer">
    <div className="footer__content">
      <a href="#about" className="footer__nav">About Me</a>
      <a href="#work" className="footer__nav">Project</a>
      <a href="#contact" className="footer__nav">Contact</a>
      <a href={resume} target="_blank" className="footer__nav">Resume</a>
      <div className="footer__linebreak"></div>
      <p className="footer__copyright"> Fan Yinze <span>@2018</span></p>
    </div>
  </div>
  </footer>
);

export default Footer;