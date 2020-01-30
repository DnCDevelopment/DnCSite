import React from 'react';
import { INukaSlideControls } from './ControlsTypes';
import Arrow from '../../assets/images/components/arrow-small.jsx';

const NukaSlideControls: React.FC<INukaSlideControls> = ({ changeSlide, disabledOn, additionalClass }): JSX.Element => {
  return (
    <button type="button" className={`slider-controls ${additionalClass}`} onClick={changeSlide} disabled={disabledOn}>
      <Arrow />
    </button>
  );
};

export default NukaSlideControls;
