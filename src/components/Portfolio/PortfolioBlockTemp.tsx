import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from 'react-multi-carousel';
import PortfolioCarouselItem from './PortfolioCarouselItem';
import CarouselButtonGroup from '../Controls/CarouselButtonGroup';
import { IPortfolioData } from '../../Types/CommonTypes.ts';
import './PortfolioBlockTemp.scss';

const PORTFOLIO_QUERY_TEMP = graphql`
  query portfolioQueryTemp {
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

const PortfolioBlock: React.FC = (): JSX.Element => {
  const {
    data: { portfolioItems: visiblePortfolios },
  }: IPortfolioData = useStaticQuery(PORTFOLIO_QUERY_TEMP);

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
          renderButtonGroupOutside={window.innerWidth > 1024}
          infinite
          centerMode
        >
          {/* Повторяется пушо там надо минимум 6 елементов вроде что бы работало на десктопах */}
          {/* Тут начало */}
          {window.innerWidth < 1024
            ? visiblePortfolios.map(({ id, name, rgba, svg }) => <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />)
            : visiblePortfolios
                .map((el, idx, arr) => (idx !== arr.length - 1 ? arr.slice(idx, idx + 2) : [el, arr[0]]))
                .map(el => (
                  <div className="carousel-column">
                    {el.map(({ id, name, rgba, svg }) => (
                      <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />
                    ))}
                  </div>
                ))}
          {/* Тут конец который ты должен пососать */}
          {window.innerWidth < 1024
            ? visiblePortfolios.map(({ id, name, rgba, svg }) => <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />)
            : visiblePortfolios
                .map((el, idx, arr) => (idx !== arr.length - 1 ? arr.slice(idx, idx + 2) : [el, arr[0]]))
                .map(el => (
                  <div className="carousel-column">
                    {el.map(({ id, name, rgba, svg }) => (
                      <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />
                    ))}
                  </div>
                ))}
          {window.innerWidth < 1024
            ? visiblePortfolios.map(({ id, name, rgba, svg }) => <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />)
            : visiblePortfolios
                .map((el, idx, arr) => (idx !== arr.length - 1 ? arr.slice(idx, idx + 2) : [el, arr[0]]))
                .map(el => (
                  <div className="carousel-column">
                    {el.map(({ id, name, rgba, svg }) => (
                      <PortfolioCarouselItem key={`${id}_${name}`} svg={svg} rgba={rgba} />
                    ))}
                  </div>
                ))}
        </Carousel>
      )}
    </div>
  );
};

export default PortfolioBlock;
