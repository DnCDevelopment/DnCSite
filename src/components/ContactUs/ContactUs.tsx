import React from 'react';
import Form from './Form';
import Contacts from './Contacts';
import './ContactUs.scss';

const ContactUs: React.FC = (): JSX.Element => {
  return (
    <div className="contact-us">
      <h2 className="subtitle">contacts</h2>
      <div className="contact-us-block">
        <Contacts />
        <Form />
      </div>
      <span className="copyright">
        D&C
        <br />
        DEVELOPMENT
      </span>
    </div>
  );
};

export default ContactUs;
