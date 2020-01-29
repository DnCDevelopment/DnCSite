import React from 'react';
import Carousel from 'nuka-carousel';
import NukaSlideControls from '../Controls/NukaSlideControls';
import { ITechnologiesData } from '../../Types/CommonTypes';
import './MainPageTechnologiesCarousel.scss';
import { INukaControls } from './MainPageServicesTypes';

const MainPageTechnologiesCarousel: React.FC<ITechnologiesData> = ({ technologies }): JSX.Element => {
  const settings = {
    width: '100%',
    renderCenterLeftControls: ({ previousSlide, currentSlide }: INukaControls): JSX.Element => (
      <NukaSlideControls changeSlide={previousSlide} disabledOn={currentSlide === 0} additionalClass="prev" />
    ),
    renderCenterRightControls: ({ nextSlide, currentSlide, slideCount }: INukaControls): JSX.Element => (
      <NukaSlideControls changeSlide={nextSlide} disabledOn={currentSlide === slideCount - 1} additionalClass="next" />
    ),
  };
  return (
    <Carousel {...settings}>
      {technologies.map(({ technology: { id, svg } }) => (
        <div key={id} dangerouslySetInnerHTML={{ __html: svg }} />
      ))}
    </Carousel>
  );
};

export default MainPageTechnologiesCarousel;
