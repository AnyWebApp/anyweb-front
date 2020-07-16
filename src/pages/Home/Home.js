import React, { useState } from 'react';

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import Footer from '../../commons/Footer/Footer';

import { HomeMain, LogoContainer, LogoImg } from './styles';

import { fetchToken, fetchPin } from './utils'

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLogged, setisLogged] = useState('');
  const [token, setToken] = useState('');

  fetchToken()

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
    console.log(inputValue);
  }

  const handlePin = (e) => {
    e.preventDefault();
    fetchPin().catch(error => console.error('Pin Error:', error));
    setisLogged('loggedIn')
  }

  return (
    <>
      {isLogged ? <HomeNavBar color='primary' /> : <HomeNavBar color='secondary' />}
      <HomeMain>
        <LogoContainer>
          <LogoImg src="/logo.svg" alt="logo" className='main-logo' />
        </LogoContainer>
        {
          (isLogged === 'loggedIn')
            ?
            <SearchField
              inputValue={inputValue}
              placeholder='listo para la busqueda'
            />
            :
            <SearchField
              onSubmit={handlePin}
              onChange={handleInputChange}
              inputValue={inputValue}
              placeholder='ingresar PIN'
            />
        }
      </HomeMain>
      <Footer />
    </>
  );
}

export default Home;
