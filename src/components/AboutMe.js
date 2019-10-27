import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

const AboutMe = () => (
  <ScrollableAnchor id={'about'}>
  <div className="content">
    <h3>About Myself</h3>
    <hr className="bar-black" />
    <div className="avatar">
      <div className="avatar__image"></div>
    </div>
    <div className="intro">
      <p>
        <strong>I am Yinze Fan and I am a computer engineer. </strong>
        I graduated from University of Toronto. 
        My favorite subjects at university were all the ones related with software development. 
        The main reason I am passionate about developing is that I can leverage my creativity, 
        because there are so many ways to achieve the same goal when 
        you code a software and I like to find the optimal one for each scenario
      </p>
    </div>
    <div className="skill">
    <h3>Skill</h3>
    <hr className="bar-black" />
      <div className="skill__unit">
        <div className="skill__label">HTML/CSS</div>
        <div className="skill__icon level-8">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>

      <div className="skill__unit">
        <div className="skill__label">Javascript</div>
        <div className="skill__icon level-7">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>

      <div className="skill__unit">
        <div className="skill__label">ReactJS</div>
        <div className="skill__icon level-7">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>

      <div className="skill__unit">
        <div className="skill__label">NodeJS</div>
        <div className="skill__icon level-6">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>

      <div className="skill__unit">
        <div className="skill__label">Python</div>
        <div className="skill__icon level-7">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>

      <div className="skill__unit">
        <div className="skill__label">AWS</div>
        <div className="skill__icon level-6">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </div>
  </ScrollableAnchor>
);

export default AboutMe;
