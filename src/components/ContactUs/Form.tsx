import React, { useState } from 'react';
import './Form.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { IFormData } from './CommonTypes';

const FORM_QUERY = graphql`
  query FormQuery {
    strapiContactform {
      titile
      blueTitle
      namePlaceholder
      telPlaceholder
      mailPlaceholder
      sendTitle
    }
  }
`;

const Form: React.FC = (): JSX.Element => {
  const {
    strapiContactform: { titile, blueTitle, namePlaceholder, telPlaceholder, mailPlaceholder, sendTitle },
  }: IFormData = useStaticQuery(FORM_QUERY);

  const [name, changeName] = useState('');
  const [tel, changeTel] = useState('');
  const [mail, changeMail] = useState('');

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us-form">
      <h3 className="contact-us-header">
        {titile}
        <br />
        <span className="contact-us-header">{blueTitle}</span>
      </h3>
      <form>
        <div className="contact-us-form-input">
          <input
            type="text"
            name="name"
            placeholder={namePlaceholder}
            value={name}
            onChange={({ target: { value } }) => {
              changeName(value);
            }}
          />
        </div>
        <div className="contact-us-form-input">
          <input
            type="tel"
            name="tel"
            placeholder={telPlaceholder}
            value={tel}
            onChange={({ target: { value } }) => {
              changeTel(value);
            }}
          />
        </div>
        <div className="contact-us-form-input">
          <input
            type="email"
            name="mail"
            placeholder={mailPlaceholder}
            value={mail}
            onChange={({ target: { value } }) => {
              changeMail(value);
            }}
          />
        </div>
        <input type="submit" value={sendTitle} onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
