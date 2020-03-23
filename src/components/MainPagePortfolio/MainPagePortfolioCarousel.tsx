import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from 'react-multi-carousel';
import CarouselButtonGroup from '../Controls/CarouselButtonGroup';
import PortfolioCarouselItem from '../Portfolio/PortfolioCarouselItem';
<<<<<<< HEAD
import { IPortfolioCarousel } from '../../Types/CommonTypes';
||||||| merged common ancestors
import { IPortfolioData } from '../../Types/CommonTypes';
=======
import { IPortfolioData } from '../../Types/CommonTypes';

>>>>>>> d8f5cb3a3edad85595be234b1d7f1d94a068d893
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
<<<<<<< HEAD
  }: IPortfolioCarousel = useStaticQuery(PORTFOLIO_CAROUSEL_QUERY);

||||||| merged common ancestors
  }: IPortfolioData = useStaticQuery(PORTFOLIO_CAROUSEL_QUERY);

=======
>>>>>>> d8f5cb3a3edad85595be234b1d7f1d94a068d893
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
        slidesToSlide={1}
        infinite
        centerMode={typeof window !== 'undefined' && window.innerWidth > 767}
        renderButtonGroupOutside={typeof window !== 'undefined' && window.innerWidth > 767}
      >
        {portfolioItems.map(({ id, name, svg, rgba }) => (
          <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />
        ))}
      </Carousel>
    </div>

  );
};

export default MainPagePortfolioCarousel;
