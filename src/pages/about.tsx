import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { graphql, useStaticQuery } from 'gatsby';
import AboutUs from '../components/AboutUs/AboutUs';
import AboutUsAdditional from '../components/AboutUs/AboutUsAdditional';
import ContactUs from '../components/ContactUs/ContactUs';
import Banner from '../components/Banner/Banner';
import nextBlock from '../components/Controls/nextBlockContext';
import { IScrollCallbackArgs, ISEOQuery } from '../Types/CommonTypes';
import Team from '../components/Team/Team';
import SEO from '../components/SEO/SEO';

const COMPONENTS: JSX.Element[] = [
  <Banner title="О нас" anchor="#AboutUs" />,
  <AboutUs additionalClass="about-page" />,
  <AboutUsAdditional />,
  <Team />,
  <ContactUs />,
];

const ABOUT_SEO = graphql`
  query AboutSeo {
    strapiSeos(strapiId: { eq: 2 }) {
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
  }: ISEOQuery = useStaticQuery(ABOUT_SEO);
  const options = {
    activeClass: 'current',
    parallax: true,
    sectionClassName: 'section',
    anchors: ['DnCBanner', 'AboutUs', 'AboutText', 'Team', 'ContactUs'],
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
          {/* eslint-disable */}
          {COMPONENTS.map((component, idx) => (
            <Section key={idx}>{component}</Section>
          ))}
          {/* eslint-enable */}
        </SectionsContainer>
      </nextBlock.Provider>
    </>
  );
};

export default IndexPage;
