import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { graphql, useStaticQuery } from 'gatsby';
import DnCBanner from '../components/MainPageDnCBanner/DnCBanner';
import nextBlock from '../components/Controls/nextBlockContext';
import AboutUs from '../components/AboutUs/AboutUs';
import ContactUs from '../components/ContactUs/ContactUs';
import MainPageServicesBlock from '../components/MainPageServices/MainPageServicesBlock';
import MainPagePortfolio from '../components/MainPagePortfolio/MainPagePortfolio';
import SEO from '../components/SEO/SEO';
import { IScrollCallbackArgs } from '../Types/CommonTypes';

const MAIN_SEO = graphql`
  query MainSeo {
    strapiSeos(strapiId: { eq: 1 }) {
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
  }: ISEOQuery = useStaticQuery(MAIN_SEO);
  const options = {
    activeClass: 'current',
    parallax: true,
    sectionClassName: 'section',
    anchors: ['DnCBanner', 'AboutUs', 'Services', 'Portfolio', 'ContactUs'],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: '0px',
    sectionPaddingBottom: '0px',
    arrowNavigation: false,
    scrollCallback: ({ activeSection }: IScrollCallbackArgs) => setCurrent(activeSection),
  };

  useEffect(() => {
    if ([2].indexOf(current) !== -1) {
      document.getElementsByTagName('body')[0].classList.add('white-bg');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('white-bg');
    }
  }, [current]);
  return (
    <>
      <SEO descriptionProp={description} lang={lang} titleProp={title} path={path} date={date} />
      <nextBlock.Provider value={{ event: () => setCurrent(current + 1) }}>
        <SectionsContainer {...options} activeSection={current}>
          <Section>
            <DnCBanner />
          </Section>
          <Section>
            <AboutUs />
          </Section>
          <Section>
            <MainPageServicesBlock />
          </Section>
          <Section>
            <MainPagePortfolio />
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
