import React from 'react'

import SearchField from '../SearchField/SearchField'

import './HomeMain.styles.css'

function HomeMain() {
  return (
    <main className='home-main'>
      <div className='container-logo'>
        <img src="/logo.svg" alt="logo" className='main-logo' />
      </div>
      <SearchField />
    </main>
  );
}

export default HomeMain;
