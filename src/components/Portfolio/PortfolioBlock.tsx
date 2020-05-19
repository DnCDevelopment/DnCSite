import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from 'react-multi-carousel';
import CustomDot from './CustomDot';
import PortfolioCarouselItem from './PortfolioCarouselItem';
import CarouselButtonGroup from '../Controls/CarouselButtonGroup';
import WorksTypeSelect from './WorksTypeSelect';
import { IPortfolioTypeData } from './CommotTypes';
import './PortfolioBlock.scss';

const PORTFOLIO_QUERY = graphql`
  query portfolioQuery {
    data: allStrapiPortfoliotypes {
      types: nodes {
        id
        name
        portfolios {
          id
          name
          svg
          rgba
        }
      }
    }
  }
`;

const PortfolioBlock: React.FC = (): JSX.Element => {
  const {
    data: { types },
  }: IPortfolioTypeData = useStaticQuery(PORTFOLIO_QUERY);
  const [currentType, changeType] = useState(0);
  const [visiblePortfolios, changeVisiblePortfolios] = useState(types[currentType].portfolios);
  useEffect(() => {
    changeVisiblePortfolios(types[currentType].portfolios);
  }, [currentType]);

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
      <WorksTypeSelect types={types} currentType={currentType} changeType={changeType} />
      {visiblePortfolios.length > 0 && (
        <Carousel
          responsive={responsive}
          customButtonGroup={<CarouselButtonGroup />}
          customDot={<CustomDot />}
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
