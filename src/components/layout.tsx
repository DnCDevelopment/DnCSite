import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import './styles/layout.scss';

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
