import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import nextBlock from '../Controls/nextBlockContext';
import Arrow from '../Controls/Arrow';
import { IClientData } from './CommonTypes';
import './Clients.scss';

const CLIENT_QUERY = graphql`
  query ClientsQuery {
    data: allCockpitClients {
      clients: nodes {
        id
        clientName {
          value
        }
        svg {
          value
        }
      }
    }
  }
`;

const Clients: React.FC = (): JSX.Element => {
  const {
    data: { clients },
  }: IClientData = useStaticQuery(CLIENT_QUERY);
  return (
    <div className="clients">
      <h2 className="clients-header">
        Наши
        <span className="clients-header clients-header-blue">Клиенты</span>
      </h2>
      <div className="clients-container">
        {clients.map(({ id, clientName, svg }) => (
          <div key={`${id}_${clientName.value}`} className="clients-container-item" dangerouslySetInnerHTML={{ __html: svg.value }} />
        ))}
      </div>
      <nextBlock.Consumer>{({ event }) => <Arrow event={event} />}</nextBlock.Consumer>
    </div>
  );
};

export default Clients;
