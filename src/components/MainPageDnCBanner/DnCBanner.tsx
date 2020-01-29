import React from 'react';
import Arrow from '../Controls/Arrow';
import './DnCBanner.scss';
import nextBlock from '../Controls/nextBlockContext';

const DnCBanner: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="mainpage-dnc-banner">
        <h1>
          D&C
          <br />
          WEB
          <br />
          DEVELOP<span>MENT</span>
        </h1>
        <nextBlock.Consumer>{({ event }) => <Arrow event={event} />}</nextBlock.Consumer>
      </div>
    </>
  );
};

export default DnCBanner;
