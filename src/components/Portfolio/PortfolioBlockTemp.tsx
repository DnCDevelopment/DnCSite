import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from 'react-multi-carousel';
import PortfolioCarouselItem from './PortfolioCarouselItem';
import CarouselButtonGroup from '../Controls/CarouselButtonGroup';
import { IPortfolioCarousel } from '../../Types/CommonTypes';
import './PortfolioBlockTemp.scss';

const PORTFOLIO_QUERY_TEMP = graphql`
  query portfolioQueryTemp {
    data: allStrapiPortfolio {
      portfolioItems: nodes {
        id
        name
        svg
        rgba
        link
      }
    }
  }
`;

const PortfolioBlock: React.FC = (): JSX.Element => {
  const {
    data: { portfolioItems: visiblePortfolios },
  }: IPortfolioCarousel = useStaticQuery(PORTFOLIO_QUERY_TEMP);

  const responsive = {
    desctop: {
      breakpoint: { max: 4096, min: 1366 },
      items: 3,
      partialVisibilityGutter: 300,
    },
    tablet: {
      breakpoint: { max: 1365, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="portfolio-block">
      <h2 className="portfolio-block-header">portfolio</h2>
      {visiblePortfolios.length > 0 && (
        <Carousel
          responsive={responsive}
          customButtonGroup={<CarouselButtonGroup />}
          showDots
          renderDotsOutside
          renderButtonGroupOutside={typeof window !== 'undefined' && window.innerWidth > 1024}
          infinite
          centerMode={typeof window !== 'undefined' && window.innerWidth > 1365}
        >
          {/* Повторяется пушо там надо минимум 6 елементов вроде что бы работало на десктопах */}
          {/* Тут начало */}
          {typeof window !== 'undefined' && window.innerWidth < 1024
            ? visiblePortfolios.map(({ id, name, rgba, svg, link }) => (
                <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} link={link} />
              ))
            : visiblePortfolios
                .map((el, idx, arr) => (idx !== arr.length - 1 ? arr.slice(idx, idx + 2) : [el, arr[0]]))
                .map(el => (
                  <div className="carousel-column">
                    {el.map(({ id, name, rgba, svg, link }) => (
                      <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} link={link} />
                    ))}
                  </div>
                ))}
          {/* Тут конец который ты должен пососать */}
          {typeof window !== 'undefined' && window.innerWidth < 1024
            ? visiblePortfolios.map(({ id, name, rgba, svg, link }) => (
                <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} link={link} />
              ))
            : visiblePortfolios
                .map((el, idx, arr) => (idx !== arr.length - 1 ? arr.slice(idx, idx + 2) : [el, arr[0]]))
                .map(el => (
                  <div className="carousel-column">
                    {el.map(({ id, name, rgba, svg, link }) => (
                      <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} link={link} />
                    ))}
                  </div>
                ))}
          {typeof window !== 'undefined' && window.innerWidth < 1024
            ? visiblePortfolios.map(({ id, name, rgba, svg, link }) => (
                <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} link={link} />
              ))
            : visiblePortfolios
                .map((el, idx, arr) => (idx !== arr.length - 1 ? arr.slice(idx, idx + 2) : [el, arr[0]]))
                .map(el => (
                  <div className="carousel-column">
                    {el.map(({ id, name, rgba, svg, link }) => (
                      <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} link={link} />
                    ))}
                  </div>
                ))}
        </Carousel>
      )}
    </div>
  );
};

export default PortfolioBlock;
