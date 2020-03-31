import React from 'react';
import './Pool.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { IPool, IPoolData } from './CommonTypes';

const POOL_QUERY = graphql`
  query PoolQuery {
    data: allStrapiPool {
      variants: nodes {
        id
        title
      }
    }
  }
`;

const Pool: React.FC<IPool> = ({ poolChoice, changeChoice }): JSX.Element => {
  const {
    data: { variants },
  }: IPoolData = useStaticQuery(POOL_QUERY);
  return (
    <div className="pool">
      <h3 className="contact-us-header">
        ОТКУДА О НАС <span className="contact-us-header">УЗНАЛИ?</span>
      </h3>
      <div className="pool-variants">
        {variants.map(({ id, title }) => (
          <div
            key={`${id}_${title}`}
            className={`pool-variants-item${poolChoice === title ? ' pool-variants-item-selected' : ''}`}
            onClick={() => changeChoice(title)}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pool;
