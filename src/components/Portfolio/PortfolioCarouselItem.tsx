import React from 'react';
import './PortfolioCarouselItem.scss';
import { IPortfolio } from '../../Types/CommonTypes';

const PortfolioCarouselItem: React.FC<IPortfolio> = ({ svg, rgba, link }): JSX.Element => {
  // Эта хуйня заебала красным гореть прост
  return (
    <div
      className="portfolio-carousel-item"
      style={/* stylelint-disable */ { backgroundColor: `rgba(${rgba.value})` } /* stylelint-enable */}
    >
      {typeof link !== 'undefined' ? (
        <a className="portfolio-carousel-item-link" href={link.value} dangerouslySetInnerHTML={{ __html: svg.value }} />
      ) : (
        <div className="portfolio-carousel-item-nolink" dangerouslySetInnerHTML={{ __html: svg.value }} />
      )}
    </div>
  );
};

export default PortfolioCarouselItem;
