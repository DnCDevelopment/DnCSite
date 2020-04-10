import React, { Suspense, useCallback, useState } from 'react';
import Menu from './Menu';
import OpenBtn from './OpenBtn';
import './Header.scss';

const Logo = React.lazy(() => import('./Logo.tsx'));

const Header: React.FC = (): JSX.Element => {
  const [isMenuOpen, openMenu] = useState(false);

  const menuOpen = useCallback(() => {
    openMenu(!isMenuOpen);
    document.getElementsByTagName('body')[0].classList.toggle('fixed');
  }, [isMenuOpen]);

  return (
    <header>
      <OpenBtn menuOpen={menuOpen} />
      {typeof window !== 'undefined' && window.innerWidth > 768 && (
        <Suspense fallback={<div />}>
          <Logo />
        </Suspense>
      )}
      <div className="placeholder-div" />
      <Menu isMenuOpen={isMenuOpen} menuOpen={menuOpen} />
    </header>
  );
};

export default Header;
