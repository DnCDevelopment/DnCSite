import React, { useEffect } from 'react';
import { ITechnologiesData } from '../../Types/CommonTypes';
import './MainPageTechologiesTicker.scss';

const TickerAnimation: () => void = (): void => {
  Array.prototype.forEach.call(document.getElementsByClassName('techologies-ticker-item'), el => {
    const { style } = el;
    setTimeout(function move() {
      const isOut: boolean = el.offsetLeft + el.offsetWidth + 100 > 0;
      const currentX: number = isOut ? parseInt(el.style.left, 10) : window.innerWidth + el.offsetWidth;
      if (isOut) {
        style.transition = '0ms';
      }
      style.left = `${currentX - 1}px`;
      setTimeout(() => {
        style.transition = '5ms';
      }, 1);
      setTimeout(move, 50);
    }, 10);
  });
};

const MainPageTechnologiesTicker: React.FC<ITechnologiesData> = ({ technologies }): JSX.Element => {
  useEffect(() => {
    TickerAnimation();
  }, []);
  return (
    <div className="techologies-ticker">
      {technologies.map(({ technology: { id, name, svg, x, y, viewSize } }) => (
        <div
          key={`${id}_${name}`}
          className={`techologies-ticker-item techologies-ticker-item-${viewSize}`}
          dangerouslySetInnerHTML={{ __html: svg }}
          style={{ top: `${y}%`, left: `${x}px` }}
        />
      ))}
    </div>
  );
};

export default MainPageTechnologiesTicker;
