import React from 'react';
import ArrowSVG from '../../assets/images/illustrations/arrow.inline.svg';
import { IArrow } from './ControlsTypes';

const Arrow: React.FC<IArrow> = ({ event, ArrowSRC = ArrowSVG }): JSX.Element => {
  return (
    <div className="arrow" onClick={event}>
      <ArrowSRC />
    </div>
  );
};

export default Arrow;
