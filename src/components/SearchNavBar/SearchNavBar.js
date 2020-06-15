import React from 'react';

import { useStyles } from './SearchNavBar.styles';

import { Box } from '@material-ui/core';

import SignInButton from '../SignInButton';
import SearchField from '../SearchField/SearchField'
import DrawerButton from '../DrawerButton/DrawerButton';
import SearchTabs from '../SearchTabs/SearchTabs'

export default function SearchNavBar() {
  const classes = useStyles();
  return (
    <nav className={classes.searchNavBar}>
      <Box className={classes.top}>
        <DrawerButton />
        <img src="../logo.svg" alt="logo" className={classes.searchLogo} />
        <SignInButton />
      </Box>
      <SearchField />
      <SearchTabs />
    </nav>
  )
}