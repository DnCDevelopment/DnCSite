import React from 'react';
import './Service.scss';
import { IService } from '../../Types/CommonTypes';

const Service: React.FC<IService> = ({ serviceName, serviceSolutions, dataKey }): JSX.Element => {
  return (
    <div className="service-item">
      <h3>{serviceName}</h3>
      {serviceSolutions.length > 0 && (
        <>
          <ol className="service-item-solutions">
            {serviceSolutions.map(({ id, solutionName }) => (
              <li key={id}>{solutionName}</li>
            ))}
          </ol>
        </>
      )}
      <span className="service-item-number">{`0${dataKey}`}</span>
    </div>
  );
};

export default Service;
