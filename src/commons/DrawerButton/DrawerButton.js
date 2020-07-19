import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, IconButton, Button } from '@material-ui/core';
import DrawerList from '../DrawerList'

import { useStyles, DrawerLogo } from './styles'

export default function DrawerButton() {
  const classes = useStyles();
  const [drawerState, setState] = React.useState(false);

  const toggleDrawer = () => {
    drawerState ? setState(false) : setState(true)
  }

  return (
    <>
      <Drawer open={drawerState} transitionDuration={450} onClick={toggleDrawer}>
        <IconButton variant="text" color="default" >
          <DrawerLogo
            src="../logo.svg"
            alt="logo"
            className='drawer-logo'
          />
        </IconButton>
        <DrawerList />

      </Drawer>
      <Button onClick={toggleDrawer} size='small' className={classes.menuIcon}>
        <MenuIcon color='action' />
      </Button>
    </>
  )
}
