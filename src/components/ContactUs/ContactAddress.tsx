import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IAdressData } from './CommonTypes';
import './ContactAddress.scss';

const ADDRESS_QUERY = graphql`
  query AddressQuery {
    data: strapiAdressdata {
      addressTitle
      address
      workTimeTitle
      worktime
      map
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
        <h3 className="contact-us-header">{addressTitle}</h3>
        <p className="contact-us-text">{address}</p>
        <h3 className="contact-us-header">{workTimeTitle}</h3>
        <p className="contact-us-text">{worktime}</p>
      </div>
      <div className="contact-us-map" dangerouslySetInnerHTML={{ __html: map }} />
    </div>
  );
};

export default ContactAddress;
