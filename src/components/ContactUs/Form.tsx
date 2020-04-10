import React, { useState } from 'react';
import './Form.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { IForm, IFormData } from './CommonTypes';
import Loader from '../../assets/animations/svg/loader.inline.svg';

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

const Form: React.FC<IForm> = ({ poolChoice, changeSended, changeResponseCode }): JSX.Element => {
  const {
    strapiContactform: { titile, blueTitle, namePlaceholder, telPlaceholder, mailPlaceholder, sendTitle },
  }: IFormData = useStaticQuery(FORM_QUERY);

  const [name, changeName] = useState('');
  const [tel, changeTel] = useState('');
  const [mail, changeMail] = useState('');
  const [errFields, changeErrFields] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    /* eslint-disable */
    if (
      name.length > 2 &&
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(tel) &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
    ) {
      setLoader(true);
      const body = {
        name: name,
        phone: tel,
        mail: mail,
      };
      if (poolChoice !== '') body.poolChoice = poolChoice;

      fetch('/api/sendMail', {
        method: 'POST',
        body: JSON.stringify(body),
      })
        .then(response => {
          changeResponseCode(response.status);
        })
        .catch(err => {
          changeResponseCode(500);
        })
        .finally(() => changeSended(true));
    } else {
      let tmp = [];
      if (name.length < 2) tmp.push(name);
      if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(tel) === false) tmp.push(tel);
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) === false) tmp.push(mail);
      changeErrFields(tmp);
    }
    /* eslint-enable */
  };

  return (
    <div className="contact-us-form">
      <h3 className="contact-us-header">
        {titile}
        <br />
        <span className="contact-us-header">{blueTitle}</span>
      </h3>
      <form>
        <div className={`contact-us-form-input${errFields.includes(name) ? ' contact-us-form-input-error' : ''}`}>
          <input
            className="contact-us-form-input-field"
            type="text"
            name="name"
            placeholder={namePlaceholder}
            value={name}
            onChange={({ target: { value } }) => {
              changeName(value);
            }}
          />
        </div>
        <div className={`contact-us-form-input${errFields.includes(tel) ? ' contact-us-form-input-error' : ''}`}>
          <input
            className="contact-us-form-input-field"
            type="tel"
            name="tel"
            placeholder={telPlaceholder}
            value={tel}
            onChange={({ target: { value } }) => {
              changeTel(value);
            }}
          />
        </div>
        <div className={`contact-us-form-input${errFields.includes(mail) ? ' contact-us-form-input-error' : ''}`}>
          <input
            className="contact-us-form-input-field"
            type="email"
            name="mail"
            placeholder={mailPlaceholder}
            value={mail}
            onChange={({ target: { value } }) => {
              changeMail(value);
            }}
          />
        </div>
        {loader ? (
          <Loader className="contact-us-form-loader" />
        ) : (
          <input type="submit" className="contact-us-form-submit" onClick={handleSubmit} value={sendTitle} />
        )}
      </form>
    </div>
  );
};

export default Form;
