import React, { useState } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Pool from './Pool';
import './ContactUs.scss';
import { IContactsComponent } from './CommonTypes';
import Response from './Response';

const ContactUs: React.FC<IContactsComponent> = ({ isContactsPage = false }): JSX.Element => {
  const [poolChoice, changeChoice] = useState('');
  const [responseCode, changeResponseCode] = useState(0);
  const [isSended, changeSended] = useState(false);
  return (
    <div className={`contact-us${isContactsPage ? ' contact-us-page' : ''}`}>
      <h2 className="subtitle">contacts</h2>
      <div className="contact-us-block">
        {isContactsPage ? <Pool poolChoice={poolChoice} changeChoice={changeChoice} /> : <Contacts />}
        {isSended ? (
          <Response code={responseCode} />
        ) : (
          <Form poolChoice={poolChoice} changeSended={changeSended} changeResponseCode={changeResponseCode} />
        )}
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
