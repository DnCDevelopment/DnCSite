import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import { graphql, useStaticQuery } from 'gatsby';
import AboutUs from '../components/AboutUs/AboutUs';
import AboutUsAdditional from '../components/AboutUs/AboutUsAdditional';
import ContactUs from '../components/ContactUs/ContactUs';
import Banner from '../components/Banner/Banner';
import nextBlock from '../components/Controls/nextBlockContext';
import { IScrollCallbackArgs, ISEOQuery } from '../Types/CommonTypes';
import SEO from '../components/SEO/SEO';

const COMPONENTS: JSX.Element[] = [
  <Banner title="О нас" anchor="#AboutUs" />,
  <AboutUs additionalClass="about-page" />,
  <AboutUsAdditional />,
  <ContactUs />,
];

const ABOUT_SEO = graphql`
  query AboutSeo {
    cockpitSeos {
      title {
        value
      }
      description {
        value
      }
      lang {
        value
      }
      path {
        value
      }
      date {
        value
      }
    }
  }
`;

const IndexPage: React.FC = (): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const {
    cockpitSeos: { title, description, lang, path, date },
  }: ISEOQuery = useStaticQuery(ABOUT_SEO);
  const options = {
    activeClass: 'current',
    parallax: true,
    sectionClassName: 'section',
    anchors: ['DnCBanner', 'AboutUs', 'AboutText', 'ContactUs'],
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
      <SEO descriptionProp={description.value} lang={lang.value} titleProp={title.value} path={path.value} date={date.value} />
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
