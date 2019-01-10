import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>burger builder</NavigationItem>
    <NavigationItem link="/orders">orders</NavigationItem>
    {props.isAuthenticated ? <NavigationItem link="/logout">log out</NavigationItem> : <NavigationItem link="/auth">sign up</NavigationItem>}
  </ul>
);

export default navigationItems;