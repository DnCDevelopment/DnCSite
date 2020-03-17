import React from 'react';
import { IPotfolioTypeSelect } from './CommotTypes';
import './WorksTypeSelect.scss';

const WorksTypeSelect: React.FC<IPotfolioTypeSelect> = ({ types, currentType, changeType }): JSX.Element => {
  return (
    <div className="portfolio-block-select">
      {types.map(({ id, name }, index) => (
        <div
          key={`${id}_${name}`}
          className={`portfolio-block-select-option${currentType === index ? '-selected' : ''}`}
          onClick={() => {
            changeType(index);
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default WorksTypeSelect;
