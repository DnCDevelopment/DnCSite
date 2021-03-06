import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { graphql, useStaticQuery } from 'gatsby';
import Banner from '../components/Banner/Banner';
import ServiceBlock from '../components/ServiceBlock/ServiceBlock';
import ContactUs from '../components/ContactUs/ContactUs';
import nextBlock from '../components/Controls/nextBlockContext';
import { IScrollCallbackArgs } from '../Types/CommonTypes';
import SEO from '../components/SEO/SEO';

const COMPONENTS = [<Banner title="Услуги" anchor="#Services" />, <ServiceBlock />, <ContactUs />];

const SERVICES_SEO = graphql`
  query ServicesSeo {
    strapiSeos(strapiId: { eq: 3 }) {
      title
      description
      lang
      path
      date
      keywords
    }
  }
`;

const IndexPage: React.FC = (): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const {
    strapiSeos: { title, description, lang, path, date, keywords },
  }: ISEOQuery = useStaticQuery(SERVICES_SEO);
  const options = {
    activeClass: 'current',
    parallax: true,
    sectionClassName: 'section',
    anchors: ['Banner', 'Services', 'ContactUs'],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: '0px',
    sectionPaddingBottom: '0px',
    arrowNavigation: false,
    scrollCallback: ({ activeSection }: IScrollCallbackArgs) => setCurrent(activeSection),
  };

  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.add('white-bg');
  }, []);
  return (
    <>
      <SEO descriptionProp={description} lang={lang} titleProp={title} path={path} date={date} keywords={keywords} />
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
