import React, { useState, useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import AboutUs from '../components/AboutUs/AboutUs';
import AboutUsAdditional from '../components/AboutUs/AboutUsAdditional';
import ContactUs from '../components/ContactUs/ContactUs';
import DnCBanner from '../components/MainPageDnCBanner/DnCBanner';
import nextBlock from '../components/Controls/nextBlockContext';
import { IScrollCallbackArgs } from './CommonTypes';
import Team from '../components/Team/Team';
import Clients from '../components/Clients/Clients';

const IndexPage: React.FC = (): JSX.Element => {
  const [current, setCurrent] = useState(0);

  const options = {
    activeClass: 'current',
    parallax: true,
    sectionClassName: 'section',
    anchors: ['DnCBanner', 'AboutUs', 'AboutText', 'Team', 'Clients', 'ContactUs'],
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
      <nextBlock.Provider value={{ event: () => setCurrent(current + 1) }}>
        <SectionsContainer {...options} activeSection={current}>
          <Section>
            <DnCBanner />
          </Section>
          <Section>
            <AboutUs additionalClass="about-page" />
          </Section>
          <Section>
            <AboutUsAdditional />
          </Section>
          <Section>
            <Team />
          </Section>
          <Section>
            <Clients />
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
