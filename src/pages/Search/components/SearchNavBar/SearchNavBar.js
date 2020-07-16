import React from 'react';

import { Nav, useStyles } from './styles'

import SignInButton from '../../../../commons/SignInButton'
import DrawerButton from '../../../../commons/DrawerButton/DrawerButton';

export default function SearchNavBar({ onClick }) {
  const classes = useStyles();

  return (
    <Nav>
      <DrawerButton />
      <button
        onClick={onClick}
        className={classes.searchLogoButton}
      >
        <img
          src="../logo.svg"
          alt="logo"
          className={classes.searchLogo}
        />
      </button>
      <SignInButton />
    </Nav>

  )
}