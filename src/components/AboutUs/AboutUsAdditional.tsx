import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ITextData } from './CommonTypes';
import Arrow from '../Controls/Arrow';
import nextBlock from '../Controls/nextBlockContext';
import './AboutUsAdditional.scss';

const ABOUT_US_TEXT_QUERY = graphql`
  query AboutTextBlocksQuery {
    data: allStrapiAbouttextblock {
      textBlocks: nodes {
        id
        title
        text
      }
    }
  }
`;

const AboutUsAdditional: React.FC = (): JSX.Element => {
  const {
    data: { textBlocks },
  }: ITextData = useStaticQuery(ABOUT_US_TEXT_QUERY);
  return (
    <div className="about-text">
      {textBlocks.map(({ id, title, text }) => (
        <div key={`${id}_${title}`} className="about-text-block">
          <h3 className="about-text-block-header">{title}</h3>
          <p className="about-text-block-text">{text}</p>
        </div>
      ))}
      <nextBlock.Consumer>{({ event }) => <Arrow event={event} />}</nextBlock.Consumer>
    </div>
  );
};

export default AboutUsAdditional;
