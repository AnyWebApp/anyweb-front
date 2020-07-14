import React from 'react';

import { Nav, useStyles } from './styles'

import SignInButton from '../../../../commons/SignInButton'
import DrawerButton from '../../../../commons/DrawerButton/DrawerButton';

export default function SearchNavBar() {
  const classes = useStyles();

  return (
    <Nav>
      <DrawerButton />
      <img src="../logo.svg" alt="logo" className={classes.searchLogo} />
      <SignInButton />
    </Nav>

  )
}