import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import MainPageTechnologiesCarousel from './MainPageTechnologiesCarousel';
import { IMainPageTechologies } from './MainPageServicesTypes';
import './MainPageTechnologies.scss';

const TECHNOLOGIES_QUERY = graphql`
  query TechnologiesQuery {
    allStrapiTechnology {
      technologies: edges {
        technology: node {
          id
          technologyName: name
          svg
        }
      }
    }
  }
`;

const MainPageTechnologies: React.FC = (): JSX.Element => {
  // ТС ругался на это techologies={technologies}

  const {
    allStrapiTechnology: { technologies },
  }: IMainPageTechologies = useStaticQuery(TECHNOLOGIES_QUERY);

  return (
    <div className="mainpage-technologies">
      <h2>ТЕХНОЛОГИИ С КОТОРЫМИ МЫ РАБОТАЕМ</h2>
      {window.innerWidth < 768 ? <MainPageTechnologiesCarousel technologies={[].concat(technologies)} /> : <div />}
    </div>
  );
};

export default MainPageTechnologies;
