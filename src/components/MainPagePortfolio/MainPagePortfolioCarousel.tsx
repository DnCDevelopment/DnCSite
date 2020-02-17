import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from 'react-multi-carousel';
import CarouselButtonGroup from '../Controls/CarouselButtonGroup';
import PortfolioCarouselItem from './PortfolioCarouselItem';
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

  const responsive = {
    labtop: {
      breakpoint: { max: 4096, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} customButtonGroup={<CarouselButtonGroup />} removeArrowOnDeviceType={['laptop', 'mobile']}>
      {portfolioItems.map(({ id, name, svg, rgba }) => (
        <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />
      ))}
      {portfolioItems.map(({ id, name, svg, rgba }) => (
        <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />
      ))}
      {portfolioItems.map(({ id, name, svg, rgba }) => (
        <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />
      ))}
    </Carousel>
  );
};

export default MainPagePortfolioCarousel;
