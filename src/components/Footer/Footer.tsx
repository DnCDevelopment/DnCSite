import React from 'react';
import { Link } from 'gatsby';
import './Footer.scss';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer>
      <div>
        <h6>
          D&C
          <br />
          WEB
          <br />
          DEVELOPMENT
        </h6>
      </div>
      <div>
        <Link className="portfolio-link" to="/portfolio">
          Портфолило
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
