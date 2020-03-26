import React, { useCallback, useState } from 'react';

import Logo from './Logo';
import Menu from './Menu';
import OpenBtn from './OpenBtn';

import './Header.scss';

const Header: React.FC = (): JSX.Element => {
  const [isMenuOpen, openMenu] = useState(false);

  const menuOpen = useCallback(() => {
    openMenu(!isMenuOpen);
    document.getElementsByTagName('body')[0].classList.toggle('fixed');
  }, [isMenuOpen]);

  return (
    <header>
      <OpenBtn menuOpen={menuOpen} />
      {typeof window !== 'undefined' && window.innerWidth > 768 && <Logo />}
      <div className="placeholder-div" />
      <Menu isMenuOpen={isMenuOpen} menuOpen={menuOpen} />
    </header>
  );
};

export default Header;
