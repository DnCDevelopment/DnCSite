import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { IMenu, IMenuData } from '../../Types/CommonTypes';
import { IMenuProps } from './HeaderTypes';

import './Menu.scss';

const MENU_QUERY = graphql`
  query MenuQuery {
    menu: allStrapiMenu {
      nodes {
        link
        title
      }
    }
  }
`;

const Menu: React.FC<IMenuProps> = ({ isMenuOpen, menuOpen }): JSX.Element => {
  const {
    menu: { nodes: menu },
  }: IMenuData = useStaticQuery(MENU_QUERY);
  return (
    <div className={`header-menu header-menu-${isMenuOpen ? 'open' : 'close'}`}>
      <div className="close-icon" onClick={menuOpen} />
      <h2>MENU</h2>
      <nav className="menu">
        <ul className="header-menu-list">
          {menu.map(
            ({ link, title }: IMenu): JSX.Element => (
              <li с onClick={isMenuOpen ? menuOpen : undefined} key={link}>
                <Link className="header-menu-link" to={link}>
                  {title}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
