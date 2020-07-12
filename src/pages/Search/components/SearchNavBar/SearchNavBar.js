import React from 'react';

import './styles.css'
import { Nav } from './styles'

import SignInButton from '../../../../commons/SignInButton'
import DrawerButton from '../../../../commons/DrawerButton/DrawerButton';


export default function SearchNavBar() {

  return (
    <Nav className='top'>
      <DrawerButton />
      <img src="../logo.svg" alt="logo" className='search-logo' />
      <SignInButton />
    </Nav>

  )
}