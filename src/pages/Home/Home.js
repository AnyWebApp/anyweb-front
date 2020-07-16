import React, { useState } from 'react';

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import Footer from '../../commons/Footer/Footer';

import { HomeMain, LogoContainer, LogoImg } from './styles';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLogged, setisLogged] = useState('');
  const [token, setToken] = useState('');

  const endpoint = 'https://any-web-backend.herokuapp.com/api/';

  const fetchToken = async () => {
    const keyToken = 'dametoken';
    const endpointToken = `${endpoint}${keyToken}`;
    const tokenResponse = await fetch(endpointToken);
    const newToken = await tokenResponse.json();
    setToken(newToken.token)

    console.log(token);
  }

  fetchToken()

  const fetchPin = async () => {
    console.log('llamada a pin');
    const keyPins = 'pins/';
    const endpointPins = `${endpoint}${keyPins}${inputValue}`;
    const fetchOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    };
    const pinResponse = await fetch(endpointPins, fetchOptions);
    const data = await pinResponse.json();
    console.log(data.pinData);
  }

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
