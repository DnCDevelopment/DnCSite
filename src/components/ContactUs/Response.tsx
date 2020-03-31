import React from 'react';
import './Response.scss';

const Response: React.FC = ({ code }): JSX.Element => {
  return (
    <div className="response">
      <h3 className="contact-us-header">{code === 200 ? 'Спасибо!' : 'Упс!'}</h3>
      <p className="response-message">
        {code === 200 ? 'Мы свяжемся с Вами в ближайшее время.' : 'Что-то пошло не так, пожалуйста, попробуйте позже'}
      </p>
    </div>
  );
};

export default Response;
