import React from 'react';
import './HomeNavBar.css'

import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';

import { Drawer, IconButton, Box, Button } from '@material-ui/core';
import HomeTabs from './HomeTabs/HomeTabs'

import SignInButton from './SignInButton/SignInButton'
import DrawerList from './DrawerList'

import { useTabsBoxStyles } from './TabsBox/TabsBox'


export default function HomeNavBar() {
  const classes = useTabsBoxStyles();
  const [drawerState, setState] = React.useState(false);

  const openDrawer = () => {
    setState(true)
  }
  const closeDrawer = () => {
    setState(false)
  }

  return (
    <nav className='home-navbar'>
      <Drawer open={drawerState}>
        <IconButton variant="text" color="default" >
          <img src="../logo.svg" alt="logo" onClick={closeDrawer} className='drawer-logo' />
        </IconButton>
        <DrawerList />
      </Drawer>
      <Box className={classes.tabsbox}>
        <Button onClick={openDrawer} size='small' className={classes.menuicon}>
          <MenuIcon color='action' />
        </Button>
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