import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IMainPageServices } from './MainPageServicesTypes';
import Service from './Service';
import './MainPageServices.scss';

const SERVICEQUERY = graphql`
  query ServicesQuery {
    allStrapiServices(filter: { mainpageservice: { id: { eq: 1 } } }) {
      services: edges {
        service: node {
          strapiId: id
          serviceName: name
          serviceSolutions: servicesolutions {
            id
            solutionName: name
          }
        }
      }
    }
    block: strapiMainpageservices {
      title
    }
  }
`;

const MainPageServices: React.FC = (): JSX.Element => {
  const {
    allStrapiServices: { services },
    block: { title },
  }: IMainPageServices = useStaticQuery(SERVICEQUERY);
  return (
    <div className="mainpage-sevices">
      <h2>{title}</h2>
      {services.length > 0 &&
        services.map(({ service: { id, serviceName, serviceSolutions } }) => (
          <Service key={`${id}_${serviceName}`} serviceName={serviceName} serviceSolutions={serviceSolutions} />
        ))}
    </div>
  );
};

export default MainPageServices;
