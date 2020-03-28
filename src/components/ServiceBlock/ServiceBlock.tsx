import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ServiceSelect from './ServiceSelect';
import ServiceSolutions from './ServiceSolutions';
import './ServiceBlock.scss';
import Arrow from '../Controls/Arrow';
import ArrowSVG from '../../assets/images/illustrations/arrow-small.inline.svg';
import nextBlock from '../Controls/nextBlockContext';
import { IServicesData } from './CommonTypes';

const SERVICE_QUERY = graphql`
  query SERVICE_QUERY {
    data: allStrapiServices {
      services: nodes {
        id
        serviceName: name
        serviceSolutions: servicesolutions {
          id
          shortName
          description
        }
      }
    }
  }
`;

const ServiceBlock: React.FC = (): JSX.Element => {
  const {
    data: { services },
  }: IServicesData = useStaticQuery(SERVICE_QUERY);
  const [currentService, changeService] = useState(0);

  return (
    <div className="service-block">
      <div>
        <ServiceSelect services={services} currentValue={currentService} onChange={changeService} />
        <ServiceSolutions service={services[currentService]} />
      </div>
      <nextBlock.Consumer>{({ event }) => <Arrow event={event} ArrowSRC={ArrowSVG} />}</nextBlock.Consumer>
    </div>
  );
};

export default ServiceBlock;
