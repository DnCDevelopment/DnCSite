import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Carousel from 'react-multi-carousel';
import { ITeamData } from './CommonTypes';
import nextBlock from '../Controls/nextBlockContext';
import CarouselButtonGroup from '../Controls/CarouselButtonGroup';
import Arrow from '../Controls/Arrow';
import Teammate from './Teammate';
import './Team.scss';

const TEAM_QUERY = graphql`
  query TeamQuery {
    data: allStrapiTeam {
      team: nodes {
        id
        teammateName: name
        position
        description
        picture {
          childImageSharp {
            fluid {
              src
            }
          }
          name
        }
      }
    }
  }
`;

const Team: React.FC = (): JSX.Element => {
  const {
    data: { team },
  }: ITeamData = useStaticQuery(TEAM_QUERY);

  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    laptop: {
      breakpoint: { max: 4096, min: 1024 },
      items: 4,
    },
  };

  return (
    <div className="team">
      <h3 className="subtitle">Our Team</h3>
      <Carousel responsive={responsive} customButtonGroup={<CarouselButtonGroup />}>
        {Array(4)
          .fill(team[0])
          .map(({ id, teammateName, position, description, picture }) => (
            <Teammate
              key={`${id}_${teammateName}`}
              teammateName={teammateName}
              position={position}
              descritpion={description}
              picture={picture}
            />
          ))}
      </Carousel>
      <nextBlock.Consumer>{({ event }) => <Arrow event={event} />}</nextBlock.Consumer>
    </div>
  );
};

export default Team;
