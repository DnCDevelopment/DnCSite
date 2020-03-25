import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { graphql, useStaticQuery } from 'gatsby';
import Banner from '../components/Banner/Banner';
import ContactUs from '../components/ContactUs/ContactUs';
import nextBlock from '../components/Controls/nextBlockContext';
import SEO from '../components/SEO/SEO';
import { IScrollCallbackArgs } from '../Types/CommonTypes';
import ContactAddress from '../components/ContactUs/ContactAddress';

const COMPONENTS = [<Banner title="Контакты" additionalClass="blue-title" />, <ContactAddress />, <ContactUs isContactsPage />];

const CONTACTS_SEO = graphql`
  query ContactsSeo {
    strapiSeos(strapiId: { eq: 5 }) {
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
  }: ISEOQuery = useStaticQuery(CONTACTS_SEO);
  const options = {
    activeClass: 'current',
    parallax: true,
    sectionClassName: 'section',
    anchors: ['Banner', 'OurContacts', 'ContactUs'],
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
