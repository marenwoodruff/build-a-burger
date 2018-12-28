import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems';

const sideDrawer = (props) => {
  return (
    <div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;