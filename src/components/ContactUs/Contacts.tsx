import React from 'react';
import './Contacts.scss';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { IContactsData } from './CommonTypes';

const CONTACTS_QUERY = graphql`
  query MyQuery {
    strapiContactsblock {
      contactsTitle
      contacts {
        id
        title
        href
      }
    }
  }
`;

const Contacts: React.FC = () => {
  const {
    strapiContactsblock: { contactsTitle, contacts },
  }: IContactsData = useStaticQuery(CONTACTS_QUERY);
  return (
    <div>
      <h3 className="contact-us-header">{contactsTitle}</h3>
      <ul className="contact-us-list">
        {contacts.map(({ id, title, href }) =>
          href === null ? (
            <li key={`${id}_${title}`} className="contact-us-list-item">
              {title}
            </li>
          ) : (
            <li key={`${id}_${title}`} className="contact-us-list-item">
              <Link to={href}>{title}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Contacts;
