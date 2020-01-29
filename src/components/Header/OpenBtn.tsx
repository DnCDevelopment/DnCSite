import React from 'react';

import { IOpenBtnProps } from './HeaderTypes';

import './OpenBtn.scss';

const OpenBtn: React.FC<IOpenBtnProps> = ({ menuOpen }): JSX.Element => (
  <div className="nav-btn" onClick={menuOpen}>
    <p>меню</p>
    <span />
  </div>
);

export default OpenBtn;
