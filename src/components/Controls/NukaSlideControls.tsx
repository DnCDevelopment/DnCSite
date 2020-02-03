import React from 'react';
import { INukaSlideControls } from './ControlsTypes';
import ArrowSVG from '../../assets/images/illustrations/arrow-small.svg';

const NukaSlideControls: React.FC<INukaSlideControls> = ({ changeSlide, disabledOn, additionalClass }): JSX.Element => {
  return (
    <button type="button" className={`slider-controls ${additionalClass}`} onClick={changeSlide} disabled={disabledOn}>
      <ArrowSVG />
    </button>
  );
};

export default NukaSlideControls;
