import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, IconButton, Button } from '@material-ui/core';
import DrawerList from '../DrawerList'

import { useStyles, DrawerLogo } from './styles'

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
      <Drawer open={drawerState} transitionDuration={450} onClick={closeDrawer}>
        <IconButton variant="text" color="default" >
          <DrawerLogo
            src="../logo.svg"
            alt="logo"
            onClick={closeDrawer}
            className='drawer-logo'
          />
        </IconButton>
        <DrawerList />

      </Drawer>
      <Button onClick={openDrawer} size='small' className={classes.menuIcon}>
        <MenuIcon color='action' />
      </Button>
    </>
  )
}
