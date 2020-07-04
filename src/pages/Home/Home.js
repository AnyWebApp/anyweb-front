import React from 'react';

import HomeNavBar from '../../components/Home/HomeNavBar/HomeNavBar';
import SearchField from '../../components/SearchField/SearchField';

import './styles.css'

function Home() {
  return (
    <>
      <HomeNavBar />
      <main className='home-main'>
        <div className='container-logo'>
          <img src="/logo.svg" alt="logo" className='main-logo' />
        </div>
        <SearchField />
      </main>
    </>
  );
}

export default Home;
