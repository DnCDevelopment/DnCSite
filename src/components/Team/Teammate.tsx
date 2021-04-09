import React from 'react';
import { ITeammate } from '../../Types/CommonTypes';
import './Teammate.scss';

const Teammate: React.FC<ITeammate> = ({ teammateName, position, description, picture }): JSX.Element => {
  const {
    value: {
      childImageSharp: {
        fluid: { src },
      },
    },
  } = picture;

  return (
    <div className="team-member">
      <div className="team-member-picture" style={{ backgroundImage: `url(${src})` }} />
      <h3 className="team-member-name">{teammateName.value}</h3>
      <h4 className="team-member-position">{position.value}</h4>
      <p className="team-member-description" dangerouslySetInnerHTML={{ __html: description.value }} />
    </div>
  );
};

export default Teammate;
