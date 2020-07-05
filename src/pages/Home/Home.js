import React from 'react';

import HomeNavBar from '../../components/Home/HomeNavBar/HomeNavBar';
import SearchField from '../../components/SearchField/SearchField';

/* import './styles.css' */

import { HomeMain, LogoContainer, LogoImg } from './styles'

function Home() {
  return (
    <>
      <HomeNavBar />
      <HomeMain>
        <LogoContainer>
          <LogoImg src="/logo.svg" alt="logo" className='main-logo' />
        </LogoContainer>
        <SearchField />
      </HomeMain>
    </>
  );
}

export default Home;
