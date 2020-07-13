import React, { useState } from 'react';

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import HomeFooter from './components/HomeFooter/HomeFooter';

import { HomeMain, LogoContainer, LogoImg } from './styles'

function Home() {

  const [inputValue, setInputValue] = useState('')

  const [isLogin, setIsLogin] = useState(false)

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase())

    console.log(inputValue)
  }

  const fetchPin = async () => {
    const url = '';
    const fetchOptions = {
      method: 'GET',
      body: { 'Pin': inputValue },
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(url, fetchOptions)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log(response)
        sessionStorage.setItem('colaActiva', response.data)
      }
      )
  }

  const handlePin = (e) => {
    e.preventDefault();
    fetchPin()
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
            // Componente para busquedas s 
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
      <HomeFooter />
    </>
  );
}

export default Home
