import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { IMainAbout } from '../../Types/CommonTypes';
import Arrow from '../Controls/Arrow';
import nextBlock from '../Controls/nextBlockContext';
import { IAboutUsComponent } from './CommonTypes';
import './AboutUs.scss';

const ABOUTUS_QUERY = graphql`
  query AboutQuery {
    aboutUs: cockpitAboutUs {
      title {
        value
      }
      subtitle {
        value
      }
      link {
        value
      }
      linkText {
        value
      }
      mainPageContent {
        value
      }
      mainPagePhoto {
        value {
          childImageSharp {
            fluid {
              src
            }
          }
          name
        }
      }
    }
  }
`;

const AboutUs: React.FC<IAboutUsComponent> = ({ additionalClass = 'main-page' }): JSX.Element => {
  const {
    aboutUs: {
      title,
      subtitle,
      mainPageContent,
      linkText,
      link,
      mainPagePhoto: {
        value: {
          childImageSharp: {
            fluid: { src },
          },
        },
      },
    },
  }: IMainAbout = useStaticQuery(ABOUTUS_QUERY);

  return (
    <div className={`about-us ${additionalClass}`}>
      <div className="text-block">
        <h4>{subtitle.value}</h4>
        <h2>{title.value}</h2>
        <article dangerouslySetInnerHTML={{ __html: mainPageContent.value }} />
        {additionalClass === 'main-page' && <Link to={link.value}>{linkText.value}</Link>}
      </div>
      <div className="image-block" style={{ backgroundImage: `url(${src})` }} />
      {additionalClass === 'main-page' && <Link to={link.value}>{linkText.value}</Link>}
      <nextBlock.Consumer>{({ event }) => <Arrow event={event} />}</nextBlock.Consumer>
    </div>
  );
};
export default AboutUs;
