import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import ContactSocial from './ContactSocial';
import ContactForm from'./ContactForm';

const Contact = () => (
  <ScrollableAnchor id={'contact'}>
    <div className="content contact__bg" >
      <h3>Contact</h3>
      <hr className="bar-white" />
      <ContactForm />
      <ContactSocial />
    </div>
  </ScrollableAnchor>
);

export default Contact;
