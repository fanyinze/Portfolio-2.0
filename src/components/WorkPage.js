import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

const WorkPage = () => (
  <ScrollableAnchor id={'work'}>
    <div className="content work__bg">
      <h3>Project</h3>
      <hr className="bar-black" />
      <div className="work">

        <a target="_blank" href="https://github.com/fanyinze/Food-Hangouts" className="work__unit">
          <div className="project-one">
            <div className="work__label">
              <strong>Food Hangouts</strong>
              <div className="work__image"></div>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://github.com/fanyinze/Google-Contact-SPA" className="work__unit">
          <div className="project-two">
            <div className="work__label">
              <strong>Google Contact SPA</strong>
              <div className="work__image"></div>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://github.com/fanyinze/User-Image-Manager" className="work__unit">
          <div className="project-three">
            <div className="work__label">
              <strong>Elastic Photo Storage</strong>
              <div className="work__image"></div>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://github.com/fyzalt/Udacity-Full-Stack-Web-Developer-Nanodegree" className="work__unit">
          <div className="project-four">
            <div className="work__label">
              <strong>Udacity Full Stack</strong>
              <div className="work__image"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </ScrollableAnchor>
);

export default WorkPage;
