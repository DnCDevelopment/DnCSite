import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from 'react-multi-carousel';
import CarouselButtonGroup from '../Controls/CarouselButtonGroup';
import PortfolioCarouselItem from '../Portfolio/PortfolioCarouselItem';
import { IPortfolioCarousel } from '../../Types/CommonTypes';
import './MainPagePortfolioCarousel.scss';

const PORTFOLIO_CAROUSEL_QUERY = graphql`
  query PortfolioItemsQuery {
    data: allCockpitPortfolio {
      portfolioItems: nodes {
        id
        name {
          value
        }
        svg {
          value
        }
        rgba {
          value
        }
        link {
          value
        }
      }
    }
  }
`;

const MainPagePortfolioCarousel: React.FC = (): JSX.Element => {
  const {
    data: { portfolioItems },
  }: IPortfolioCarousel = useStaticQuery(PORTFOLIO_CAROUSEL_QUERY);

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
        centerMode={typeof window !== 'undefined' && window.innerWidth > 767}
      >
        {portfolioItems.map(({ id, name, svg, rgba, link }) => (
          <PortfolioCarouselItem key={`${id}_${name.value}`} svg={svg} rgba={rgba} link={link} />
        ))}
      </Carousel>
    </div>
  );
};

export default MainPagePortfolioCarousel;
