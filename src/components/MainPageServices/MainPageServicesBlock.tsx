import React from 'react';
import MainPageTechnologies from './MainPageTechnologies';
import MainPageServices from './MainPageServices';
import Arrow from '../Controls/Arrow';
import nextBlock from '../Controls/nextBlockContext';
import './MainPageServiceBlock.scss';
import ArrowSVG from '../../assets/images/illustrations/arrow-small.svg';

const MainPageServicesBlock: React.FC = (): JSX.Element => {
  return (
    <div className="mainpage-service-block">
      <MainPageServices />
      <MainPageTechnologies />
      <nextBlock.Consumer>{({ event }) => <Arrow ArrowSRC={ArrowSVG} event={event} />}</nextBlock.Consumer>
    </div>
  );
};

export default MainPageServicesBlock;
