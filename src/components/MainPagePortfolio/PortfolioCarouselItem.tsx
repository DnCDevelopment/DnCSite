import React from 'react';
import './PortfolioCarouselItem.scss';
import { IPortfolio } from './CommonTypes';

const PortfolioCarouselItem: React.FC<IPortfolio> = ({ svg, rgba }): JSX.Element => {
  return <div className="portfolio-carousel-item" style={{ backgroundColor: `rgba(${rgba})` }} dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default PortfolioCarouselItem;
