import React, { useState } from 'react';
import './ServiceSelect.scss';
import ArrowSVG from '../../assets/images/illustrations/arrow-small.inline.svg';
import { IServicesSelect } from './CommonTypes';

const ServiceSelect: React.FC<IServicesSelect> = ({ services, onChange, currentValue }): JSX.Element => {
  const [isOpen, changeOpen] = useState(false);

  return (
    <div className={`${isOpen ? 'open' : ''} service-block-select`}>
      {services.map(({ id, serviceName }, index) => (
        <div
          key={id}
          className={`service-block-select-option ${index === currentValue ? 'service-block-select-option-selected' : ''}`}
          onClick={() => {
            changeOpen(!isOpen);
            onChange(index);
          }}
        >
          {serviceName}
          <span className="service-block-select-option-arrow">
            <ArrowSVG />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelect;
