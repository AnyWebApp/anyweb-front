import React, { useState } from 'react';

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import Footer from '../../commons/Footer/Footer';

import { HomeMain, LogoContainer, LogoImg } from './styles';

function Home() {

  const [inputValue, setInputValue] = useState('');

  const [isLogin, setIsLogin] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());

    console.log(inputValue)
  }

  const fetchPin = async () => {
    const keyToken = 'dametoken';
    const keyPins = 'pins';

    const endpointToken = `https://any-web-backend.herokuapp.com/api/${keyToken}`;
    const endpointPins = `https://any-web-backend.herokuapp.com/api/${keyPins}`;

    const fetchOptions = {
      method: 'GET',
      mode: 'cors',
      body: { 'pin': 'AAB' },
      headers: { 'Content-Type': 'application/json' },
    };

    const tokenResponse = await fetch(endpointToken);
    const token = await tokenResponse.json();
    console.log(token);
  }

  fetchPin()

  const handlePin = (e) => {
    e.preventDefault();
    fetchPin().catch(error => console.error('Error:', error))
    setIsLogin(true)
  }

  return (
    <>
      {isLogin ? <HomeNavBar color='primary' /> : <HomeNavBar color='secondary' />}

      <HomeMain>
        <LogoContainer>
          <LogoImg src="/logo.svg" alt="logo" className='main-logo' />
        </LogoContainer>

        {
          isLogin
            ?
            // Componente para busquedas
            <SearchField
              inputValue={inputValue}

              placeholder='listo para la busqueda'
            />
            :
            // componenete para ingresar el PIN
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

export default Home
