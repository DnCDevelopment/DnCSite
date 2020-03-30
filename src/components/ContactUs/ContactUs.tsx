import React, { useState } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Pool from './Pool';
import './ContactUs.scss';
import { IContactsComponent } from './CommonTypes';

const ContactUs: React.FC<IContactsComponent> = ({ isContactsPage = false }): JSX.Element => {
  const [poolChoice, changeChoice] = useState('');
  return (
    <div className={`contact-us${isContactsPage ? ' contact-us-page' : ''}`}>
      <h2 className="subtitle">contacts</h2>
      <div className="contact-us-block">
        {isContactsPage ? <Pool poolChoice={poolChoice} changeChoice={changeChoice} /> : <Contacts />}
        <Form poolChoice={poolChoice} />
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
