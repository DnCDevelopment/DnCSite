import React from 'react';
import { Link } from 'gatsby';
import './NotFound.scss';

const NotFound: React.FC = (): JSX.Element => (
  <div className="notfound-page">
    <h2 className="subtitle">Страница не найдена</h2>
    <div className="notfound-wrapper">
      <h1 className="notfound-header">
        404
        <span className="notfound-header-error">Error</span>
      </h1>
      <Link className="notfound-link" to="/">
        На главную
      </Link>
    </div>
  </div>
);

export default NotFound;
