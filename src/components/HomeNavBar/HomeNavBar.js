import React from 'react';

import { useStyles } from './HomeNavBar.styles'

import AppsIcon from '@material-ui/icons/Apps';
import { Box, IconButton } from '@material-ui/core';

import HomeTabs from '../HomeTabs/HomeTabs'
import SignInButton from '../SignInButton'
import DrawerButton from '../DrawerButton/DrawerButton';

export default function HomeNavBar() {
  const classes = useStyles();

  return (
    <nav className={classes.homeNavBar}>
      <Box className={classes.tabsBox}>
        <DrawerButton />
        <HomeTabs />
      </Box>
      <Box>
        <IconButton variant="text" color="default">
          <AppsIcon />
        </IconButton>
        <SignInButton />
      </Box>
    </nav>
  )
}