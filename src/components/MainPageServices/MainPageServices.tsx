import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IMainPageServices } from './MainPageServicesTypes';
import Service from './Service';
import './MainPageServices.scss';

const SERVICEQUERY = graphql`
  query ServicesQuery {
    allCockpitServices {
      services: edges {
        service: node {
          id
          serviceName {
            value
          }
          serviceSolutions {
            value {
              id
              solutionName {
                value
              }
            }
          }
        }
      }
    }
    block: cockpitMainPageServices {
      title {
        value
      }
    }
  }
`;

const MainPageServices: React.FC = (): JSX.Element => {
  const {
    allCockpitServices: { services },
    block: { title },
  }: IMainPageServices = useStaticQuery(SERVICEQUERY);
  return (
    <div className="mainpage-services">
      <h2 className="mainpage-services-header">{title.value}</h2>
      <div className="mainpage-services-items">
        {services.length > 0 &&
          services.map(({ service: { id, serviceName, serviceSolutions } }, dataKey) => (
            <Service
              key={`${id}_${serviceName.value}`}
              serviceName={serviceName}
              serviceSolutions={serviceSolutions}
              dataKey={dataKey + 1}
            />
          ))}
      </div>
    </div>
  );
};

export default MainPageServices;
