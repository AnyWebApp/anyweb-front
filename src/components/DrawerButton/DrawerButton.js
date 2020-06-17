import React from 'react';
import { useStyles } from './DrawerButton.styles'

import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, IconButton, Button } from '@material-ui/core';
import DrawerList from '../DrawerList/DrawerList'

export default function DrawerButton() {
  const classes = useStyles();
  const [drawerState, setState] = React.useState(false);

  const openDrawer = () => {
    setState(true)
  }
  const closeDrawer = () => {
    setState(false)
  }

  return (
    <>
      <Drawer open={drawerState} transitionDuration={400} classes={{
        paper: classes.drawer,
        backdrop: classes.backdrop
      }}>
        <IconButton variant="text" color="default" className={classes.logoContainer}>
          <img src="../logo.svg" alt="logo" onClick={closeDrawer} className={classes.logo} />
        </IconButton>
        <DrawerList />
      </Drawer>
      <Button onClick={openDrawer} size='small' className={classes.menuIcon}>
        <MenuIcon color='action' />
      </Button>
    </>
  )
}
