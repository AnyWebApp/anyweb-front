import React from 'react';

import { useStyles, Nav } from './styles'

import AppsIcon from '@material-ui/icons/Apps';
import { Box, IconButton } from '@material-ui/core';

import HomeTabs from '../HomeTabs/HomeTabs'
import SignInButton from '../../SignInButton'
import DrawerButton from '../../DrawerButton/DrawerButton';

import { MobileView } from "react-device-detect";

export default function HomeNavBar() {
  const classes = useStyles();

  return (
    <Nav>
      <Box className={classes.tabsBox}>
        <MobileView>
          <DrawerButton />
        </MobileView>
        <HomeTabs />
      </Box>
      <Box>
        <IconButton
          variant="text"
          color="default"
        >
          <AppsIcon />
        </IconButton>
        <SignInButton />
      </Box>
    </Nav>
  )
}