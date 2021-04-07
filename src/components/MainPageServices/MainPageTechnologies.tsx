import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import MainPageTechnologiesCarousel from './MainPageTechnologiesCarousel';
import MainPageTechologiesTicker from './MainPageTechologiesTicker';
import { IMainPageTechologies } from './MainPageServicesTypes';
import './MainPageTechnologies.scss';

const TECHNOLOGIES_QUERY = graphql`
  query TechnologiesQuery {
    data: allCockpitTechnologies {
      technologies: edges {
        technology: node {
          id
          technologyName {
            value
          }
          svg {
            value
          }
          x {
            value
          }
          y {
            value
          }
          viewSize {
            value
          }
        }
      }
    }
  }
`;

const MainPageTechnologies: React.FC = (): JSX.Element => {
  // ТС ругался на это techologies={technologies}

  const {
    data: { technologies },
  }: IMainPageTechologies = useStaticQuery(TECHNOLOGIES_QUERY);

  return (
    <div className="mainpage-technologies">
      {typeof window !== 'undefined' && window.innerWidth < 768 ? (
        <MainPageTechnologiesCarousel technologies={[].concat(technologies)} />
      ) : (
        <MainPageTechologiesTicker technologies={[].concat(technologies)} />
      )}
    </div>
  );
};

export default MainPageTechnologies;
