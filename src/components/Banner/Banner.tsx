import React from 'react';
import Arrow from '../Controls/Arrow';
import './Banner.scss';
import nextBlock from '../Controls/nextBlockContext';
import { IBanner } from './CommonTypes';

const DnCBanner: React.FC<IBanner> = ({ title, additionalClass = '', anchor = '' }): JSX.Element => {
  return (
    <div className={`banner ${additionalClass}`}>
      {anchor !== '' ? (
        <a href={anchor}>
          <h1 className="banner-header">{title}</h1>
        </a>
      ) : (
        <h1 className="banner-header">{title}</h1>
      )}
      <nextBlock.Consumer>{({ event }) => <Arrow event={event} />}</nextBlock.Consumer>
    </div>
  );
};

export default DnCBanner;
