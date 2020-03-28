import React, { useState } from 'react';
import './ServiceSolutions.scss';
import { IServiceWraped } from './CommonTypes';

const ServiceSolutions: React.FC<IServiceWraped> = ({ service }): JSX.Element => {
  const { serviceSolutions = [] } = service;
  const [selected, toogleSelected] = useState();
  return (
    <>
      {serviceSolutions.map(({ id, shortName, description }) => (
        <div
          className={`service-block-solution${selected === id ? ' service-block-solution-selected' : ''}`}
          key={id}
          onClick={() => {
            toogleSelected(id === selected ? '' : id);
          }}
        >
          <div className="service-block-solution-name">{shortName}</div>
          <div className="service-block-solution-description">{description}</div>
        </div>
      ))}
    </>
  );
};

export default ServiceSolutions;
