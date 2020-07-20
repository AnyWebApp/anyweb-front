import React from 'react';

import { useStyles, Nav } from './styles';

import AppsIcon from '@material-ui/icons/Apps';
import { Box, IconButton } from '@material-ui/core';

import HomeTabs from '../HomeTabs/HomeTabs';
import SignInButton from '../../../../commons/SignInButton';
import DrawerButton from '../../../../commons/DrawerButton/DrawerButton';

export default function HomeNavBar({ color }) {

  const classes = useStyles();

  return (
    <Nav>
      <Box className={classes.tabsBox}>
        <DrawerButton />
        <HomeTabs
          color={color}
        />
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