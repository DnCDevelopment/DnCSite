import React from 'react';
import './Contacts.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { IContactsData } from './CommonTypes';

const CONTACTS_QUERY = graphql`
  query MyQuery {
    data: cockpitContactBlocks {
      id
      contacts {
        value {
          id
          title {
            value
          }
          href {
            value
          }
        }
      }
      contactsTitle {
        value
      }
    }
  }
`;

const Contacts: React.FC = () => {
  const {
    data: { contactsTitle, contacts },
  }: IContactsData = useStaticQuery(CONTACTS_QUERY);
  return (
    <div className="contacts-info">
      <h3 className="contact-us-header">{contactsTitle.value}</h3>
      <ul className="contact-us-list">
        {contacts.map(({ id, title, href }) =>
          href === null ? (
            <li key={`${id}_${title.value}`} className="contact-us-list-item">
              {title}
            </li>
          ) : (
            <li key={`${id}_${title.value}`} className="contact-us-list-item">
              <a href={href.value}>{title.value}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Contacts;
