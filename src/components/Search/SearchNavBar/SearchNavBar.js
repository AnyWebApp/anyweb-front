import React from 'react';

import './styles.css'

import { Box } from '@material-ui/core';
import SignInButton from '../../SignInButton'
import SearchField from '../../SearchField/SearchField'
import DrawerButton from '../../DrawerButton/DrawerButton';

export default function SearchNavBar() {

  return (
    <nav className='search-navbar'>
      <Box className='top'>
        <DrawerButton />
        <img src="../logo.svg" alt="logo" className='search-logo' />
        <SignInButton />
      </Box>
      <SearchField />
      {/* <SearchTabs /> */}
    </nav>
  )
}