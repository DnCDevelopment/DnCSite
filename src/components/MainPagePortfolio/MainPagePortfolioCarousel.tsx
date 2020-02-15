import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from 'react-multi-carousel';
import CarouselButtonGroup from '../Controls/CarouselButtonGroup';
import PortfolioCarouselItem from '../Portfolio/PortfolioCarouselItem';
import { IPortfolioData } from '../../Types/CommonTypes';
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
  }: IPortfolioData = useStaticQuery(PORTFOLIO_CAROUSEL_QUERY);

  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
    laptop: {
      breakpoint: { max: 4096, min: 767 },
      items: 1,
      partialVisibilityGutter: 300,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        customButtonGroup={<CarouselButtonGroup />}
        removeArrowOnDeviceType={['laptop', 'mobile']}
        slidesToSlide={1}
        infinite
        centerMode={window.innerWidth > 767} // оно норм при ресайзе ес шо
      >
        {portfolioItems.map(({ id, name, svg, rgba }) => (
          <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />
        ))}
      </Carousel>
    </div>
  );
};

export default MainPagePortfolioCarousel;
