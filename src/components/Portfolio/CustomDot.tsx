import React from 'react';
import { IDot } from './CommotTypes';

const CustomDot: React.FC<IDot> = ({ onClick, active }): JSX.Element => {
  return (
    <li
      className={`react-multi-carousel-dot  ${active ? 'react-multi-carousel-dot--active' : ''}`}
      onClick={() => {
        onClick();
      }}
    >
      <button type="button" />
    </li>
  );
};

export default CustomDot;
