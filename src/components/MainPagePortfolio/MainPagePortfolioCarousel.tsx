import React, { useEffect, useState } from 'react';
import Carousel from 'nuka-carousel';
import { graphql, useStaticQuery } from 'gatsby';
import NukaSlideControls from '../Controls/NukaSlideControls';
import PortfolioCarouselItem from './PortfolioCarouselItem';
import { INukaControls } from '../MainPageServices/MainPageServicesTypes';
import { IPortfolioCarousel } from './CommonTypes';
import './MainPagePortfolioCarousel.scss';

const PORTFOLIO_CAROUSEL_QUERY = graphql`
  query PortfolioItemsQuery {
    data: allStrapiPortfolio {
      portfolioItems: nodes {
        id
        name
        svg
        rgba
      }
    }
  }
`;

const MainPagePortfolioCarousel: React.FC = (): JSX.Element => {
  const {
    data: { portfolioItems },
  }: IPortfolioCarousel = useStaticQuery(PORTFOLIO_CAROUSEL_QUERY);

  const settings = {
    width: '100%',
    cellSpacing: 240,
    renderCenterLeftControls: ({ previousSlide, currentSlide }: INukaControls): JSX.Element => (
      <NukaSlideControls changeSlide={previousSlide} disabledOn={currentSlide === 0} additionalClass="prev" />
    ),
    renderCenterRightControls: ({ nextSlide, currentSlide, slideCount }: INukaControls): JSX.Element => (
      <NukaSlideControls changeSlide={nextSlide} disabledOn={currentSlide === slideCount - 1} additionalClass="next" />
    ),
  };

  //Пусть пока так будет, я потом напишу норм карусель
  const [slideToShow, changeSlidesToShow] = useState(window.innerWidth > 767 ? 3 : 1);

  useEffect(() => {
    window.addEventListener('resize', () => {
      changeSlidesToShow(window.innerWidth > 767 ? 3 : 1);
    });
  }, []);

  return (
    <Carousel {...settings} slidesToShow={slideToShow}>
      {portfolioItems.map(({ id, name, svg, rgba }) => (
        <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />
      ))}
    </Carousel>
  );
};

export default MainPagePortfolioCarousel;
