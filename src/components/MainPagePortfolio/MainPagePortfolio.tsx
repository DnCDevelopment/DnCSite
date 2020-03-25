import React from 'react';
import './MainPagePortfolio.scss';
import nextBlock from '../Controls/nextBlockContext';
import MainPagePortfolioCarousel from './MainPagePortfolioCarousel';
import Arrow from '../Controls/Arrow';

const MainPagePortfolio: React.FC = (): JSX.Element => {
  return (
    <div className="mainpage-portfolio">
      <h2 className="mainpage-portfolio-header">
        <span className="mainpage-portfolio-header-pf">Pf</span>
        <span className="mainpage-portfolio-header-portfolio">Portfolio</span>
      </h2>
      <MainPagePortfolioCarousel />
      <nextBlock.Consumer>{({ event }) => <Arrow event={event} />}</nextBlock.Consumer>
    </div>
  );
};

export default MainPagePortfolio;
