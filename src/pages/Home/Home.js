import React from 'react';

import HomeNavBar from '../../components/Home/HomeNavBar/HomeNavBar';
import SearchField from '../../components/SearchField/SearchField';
import HomeFooter from '../../components/Home/HomeFooter/HomeFooter';

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
      <HomeFooter />
    </>
  );
}

export default Home;
