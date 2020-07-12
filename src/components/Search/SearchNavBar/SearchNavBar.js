import React from 'react';

import './styles.css'
import { Nav } from './styles'

import SignInButton from '../../SignInButton'
import DrawerButton from '../../DrawerButton/DrawerButton';


export default function SearchNavBar() {

  return (
    <Nav className='top'>
      <DrawerButton />
      <img src="../logo.svg" alt="logo" className='search-logo' />
      <SignInButton />
    </Nav>

  )
}