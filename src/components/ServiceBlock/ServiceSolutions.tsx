import React from 'react';
import './ServiceSolutions.scss';
import { IServiceWraped } from './CommonTypes';

const ServiceSolutions: React.FC<IServiceWraped> = ({ service }): JSX.Element => {
  const { serviceSolutions = [] } = service;
  return (
    <>
      {serviceSolutions.map(({ id, shortName, description }) => (
        <div className="service-block-solution" key={id}>
          <div className="service-block-solution-name">{shortName}</div>
          <div className="service-block-solution-description">{description}</div>
        </div>
      ))}
    </>
  );
};

export default ServiceSolutions;
