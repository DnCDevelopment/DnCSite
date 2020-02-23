import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { IMainAbout } from '../../Types/CommonTypes';
import Arrow from '../Controls/Arrow';
import nextBlock from '../Controls/nextBlockContext';
import './AboutUs.scss';

const ABOUTUS_QUERY = graphql`
  query AboutQuery {
    aboutUs: strapiAboutus {
      title
      subtitle
      mainPageContent: mainpage_content
      linkText: link_text
      link
      main_page_photo {
        childImageSharp {
          fluid {
            src
          }
        }
        name
      }
    }
  }
`;

const AboutUs: React.FC = ({ additionalClass = 'main-page' }): JSX.Element => {
  const {
    aboutUs: {
      title,
      subtitle,
      mainPageContent,
      linkText,
      link,
      main_page_photo: {
        childImageSharp: {
          fluid: { src },
        },
        name: alt,
      },
    },
  }: IMainAbout = useStaticQuery(ABOUTUS_QUERY);

  return (
    <div className={`about-us ${additionalClass}`}>
      <div className="text-block">
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
        <article>{mainPageContent}</article>
        {additionalClass === 'main-page' && <Link to={link}>{linkText}</Link>}
      </div>
      <div className="image-block">
        <img src={src} alt={alt} />
      </div>
      {additionalClass === 'main-page' && <Link to={link}>{linkText}</Link>}
      <nextBlock.Consumer>{({ event }) => <Arrow event={event} />}</nextBlock.Consumer>
    </div>
  );
};
export default AboutUs;
