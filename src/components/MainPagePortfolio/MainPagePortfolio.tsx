import React from 'react';
import './MainPagePortfolio.scss';
import nextBlock from '../Controls/nextBlockContext';
import MainPagePortfolioCarousel from './MainPagePortfolioCarousel';
import Arrow from '../Controls/Arrow';

const MainPagePortfolio: React.FC = (): JSX.Element => {
  return (
    <div className="mainpage-portfolio">
      <h2 className="mainpage-portfolio-header">{window.innerWidth < 768 ? 'Pf' : 'Portfolio'}</h2>
      <MainPagePortfolioCarousel />
      <nextBlock.Consumer>{({ event }) => <Arrow event={event} />}</nextBlock.Consumer>
    </div>
  );
};

export default MainPagePortfolio;
