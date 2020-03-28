import React from 'react';
import { ITeammate } from '../../Types/CommonTypes';
import './Teammate.scss';

const Teammate: React.FC<ITeammate> = ({ teammateName, position, descritpion, picture }): JSX.Element => {
  const {
    childImageSharp: {
      fluid: { src },
    },
  } = picture;

  return (
    <div className="team-member">
      <div className="team-member-picture" style={{ backgroundImage: `url(${src})` }} />
      <h3 className="team-member-name">{teammateName}</h3>
      <h4 className="team-member-position">{position}</h4>
      <p className="team-member-description">{descritpion}</p>
    </div>
  );
};

export default Teammate;
