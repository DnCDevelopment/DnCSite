/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ISocialIcons, ISocialIconsData } from '../../Types/CommonTypes';

import './SocialLinks.scss';

const SOCIAL_ICONS_QUERY = graphql`
  query SocialIconsQuery {
    socialIcons: allCockpitSocialIcons {
      nodes {
        icon {
          value
        }
        link {
          value
        }
      }
    }
  }
`;

const SocialIcons: React.FC = (): JSX.Element => {
  const {
    socialIcons: { nodes: socialIcons },
  }: ISocialIconsData = useStaticQuery(SOCIAL_ICONS_QUERY);
  return (
    <div className="social-icons">
      {socialIcons.map(
        ({ icon, link }: ISocialIcons): JSX.Element => (
          <a className="social-link" key={link.value} href={link.value}>
            <div dangerouslySetInnerHTML={{ __html: icon.value }} />
          </a>
        )
      )}
    </div>
  );
};

export default SocialIcons;
