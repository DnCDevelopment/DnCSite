import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { graphql, useStaticQuery } from 'gatsby';
import Banner from '../components/Banner/Banner';
import ContactUs from '../components/ContactUs/ContactUs';
import nextBlock from '../components/Controls/nextBlockContext';
import { IScrollCallbackArgs } from './CommonTypes';
import PortfolioBlock from '../components/Portfolio/PortfolioBlockTemp';
import SEO from '../components/SEO/SEO';

const PORTFOLIO_SEO = graphql`
  query PortfolioSeo {
    strapiSeos(strapiId: { eq: 4 }) {
      title
      description
      lang
      path
      date
    }
  }
`;

const IndexPage: React.FC = (): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const {
    strapiSeos: { title, description, lang, path, date },
  }: ISEOQuery = useStaticQuery(PORTFOLIO_SEO);
  const options = {
    activeClass: 'current',
    parallax: true,
    sectionClassName: 'section',
    anchors: ['Banner', 'OurWorks', 'ContactUs'],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: '0px',
    sectionPaddingBottom: '0px',
    arrowNavigation: false,
    scrollCallback: ({ activeSection }: IScrollCallbackArgs) => setCurrent(activeSection),
  };

  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.remove('white-bg');
  }, []);
  return (
    <>
      <SEO descriptionProp={description} lang={lang} titleProp={title} path={path} date={date} />
      <nextBlock.Provider value={{ event: () => setCurrent(current + 1) }}>
        <SectionsContainer {...options} activeSection={current}>
          <Section>
            <Banner title="Портфолио" />
          </Section>
          <Section>
            <PortfolioBlock />
          </Section>
          <Section>
            <ContactUs />
          </Section>
        </SectionsContainer>
      </nextBlock.Provider>
    </>
  );
};

export default IndexPage;
