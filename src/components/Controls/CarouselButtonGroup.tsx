import React from 'react';
import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
import './CarouselButtonGroup.scss';
import ArrowSVG from '../../assets/images/illustrations/arrow-small.inline.svg';

const CarouselButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;
  return (
    <div className="carousel-button-group">
      <button
        className={`carousel-button-group-btn carousel-button-group-btn-prev  ${
          currentSlide === 0 ? 'carousel-button-group-btn-disabled' : ''
        }`}
        type="button"
        onClick={() => {
          previous();
        }}
      >
        <ArrowSVG />
      </button>
      <button
        className={`carousel-button-group-btn  carousel-button-group-btn-next ${
          currentSlide === totalItems - 1 ? 'carousel-button-group-btn-disabled' : ''
        }`}
        type="button"
        onClick={() => {
          next();
        }}
      >
        <ArrowSVG />
      </button>
    </div>
  );
};

export default CarouselButtonGroup;
