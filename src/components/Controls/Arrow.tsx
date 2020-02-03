import React from 'react';
import ArrowSVG from '../../assets/images/illustrations/arrow.svg';
import { IArrow } from './ControlsTypes';

const Arrow: React.FC<IArrow> = ({ event, ArrowSRC = ArrowSVG }): JSX.Element => {
  return (
    <div className="arrow" alt="arrow" onClick={event}>
      <ArrowSRC />
    </div>
  );
};

export default Arrow;
