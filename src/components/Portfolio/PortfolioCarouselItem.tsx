import React from 'react';
import './PortfolioCarouselItem.scss';
import { IPortfolio } from '../../Types/CommonTypes';

const PortfolioCarouselItem: React.FC<IPortfolio> = ({ svg, rgba }): JSX.Element => {
  // Эта хуйня заебала красным гореть прост
  return (
    <div
      className="portfolio-carousel-item"
      style={/* stylelint-disable */ { backgroundColor: `rgba(${rgba})` } /* stylelint-enable */}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default PortfolioCarouselItem;
