import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IAdressData } from './CommonTypes';
import './ContactAddress.scss';

const ADDRESS_QUERY = graphql`
  query AddressQuery {
    data: cockpitAddress {
      address {
        value
      }
      addressTitle {
        value
      }
      worktime {
        value
      }
      worktimeTitle {
        value
      }
      map {
        value
      }
    }
  }
`;

const ContactAddress: React.FC = (): JSX.Element => {
  const {
    data: { addressTitle, address, workTimeTitle, worktime, map },
  }: IAdressData = useStaticQuery(ADDRESS_QUERY);
  return (
    <div className="contact-us contacts-extended">
      <div className="contacts-us-address">
        <h3 className="contact-us-header">{addressTitle.value}</h3>
        <p className="contact-us-text">{address.value}</p>
        <h3 className="contact-us-header">{workTimeTitle.value}</h3>
        <p className="contact-us-text">{worktime.value}</p>
      </div>
      <div className="contact-us-map" dangerouslySetInnerHTML={{ __html: map.value }} />
    </div>
  );
};

export default ContactAddress;
