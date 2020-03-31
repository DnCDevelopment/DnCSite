import React from 'react';
import Carousel from 'react-multi-carousel';
import CarouselButtonGroup from '../Controls/CarouselButtonGroup';
import { ITechnologiesData } from '../../Types/CommonTypes';
import './MainPageTechnologiesCarousel.scss';

const MainPageTechnologiesCarousel: React.FC<ITechnologiesData> = ({ technologies }): JSX.Element => {
  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} customButtonGroup={<CarouselButtonGroup />}>
      {technologies.map(({ technology: { id, svg } }) => (
        <div key={id} className="techologies-item" dangerouslySetInnerHTML={{ __html: svg }} />
      ))}
    </Carousel>
  );
};

export default MainPageTechnologiesCarousel;
