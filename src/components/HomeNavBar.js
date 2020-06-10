import React from 'react';
import styled from 'styled-components';
import { styled as MuiStyled } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';

import { Button, Drawer, IconButton, Box } from '@material-ui/core';

import DrawerList from './DrawerList'
import HomeTabs from './HomeTabs'

const Img = styled.img`  
width: 120px;
margin-top: 20px;
margin-left: -60px
`

const Nav = styled.nav`
  display:flex;
  justify-content: space-between
`

const MyButton = MuiStyled(Button)({
  height: 35,
  margin: 5,
  background: '#FFFFFF'
});

const MyBox = MuiStyled(Box)({
  display: 'flex',
  width: '60%'
});

export default function HomeNavBar() {

  const [drawerState, setState] = React.useState(false);



  const openDrawer = () => {
    setState(true)
  }
  const closeDrawer = () => {
    setState(false)
  }

  return (
    <Nav className='HomeNavBar'>

      <Drawer open={drawerState}>
        <IconButton variant="text" color="default">
          <Img src="../logo.svg" alt="logo" onClick={closeDrawer} />
        </IconButton>
        <DrawerList />
      </Drawer>

      <MyBox>
        <Button onClick={openDrawer}>
          <MenuIcon color='action' />
        </Button>

        <HomeTabs />
      </MyBox>

      <Box>
        <IconButton variant="text" color="default">
          <AppsIcon />
        </IconButton>
        <MyButton variant="outlined" color="default" size="small">
          Sign in
        </MyButton>
      </Box>



    </Nav>
  )
}