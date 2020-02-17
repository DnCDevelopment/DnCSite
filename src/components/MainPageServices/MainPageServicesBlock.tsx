import React from 'react';
import MainPageTechnologies from './MainPageTechnologies';
import MainPageServices from './MainPageServices';
import Arrow from '../Controls/Arrow';
import nextBlock from '../Controls/nextBlockContext';
import './MainPageServiceBlock.scss';
import ArrowSVG from '../../assets/images/illustrations/arrow-small.inline.svg';

const MainPageServicesBlock: React.FC = (): JSX.Element => {
  return (
    <div className="mainpage-service-block">
      <h2 className="subtitle mainpage-service-block-header">WEB</h2>
      <MainPageServices />
      <h2 className="sutitle mainpage-service-block-header">ТЕХНОЛОГИИ С КОТОРЫМИ МЫ РАБОТАЕМ</h2>
      <MainPageTechnologies />
      <nextBlock.Consumer>{({ event }) => <Arrow ArrowSRC={ArrowSVG} event={event} />}</nextBlock.Consumer>
    </div>
  );
};

export default MainPageServicesBlock;
