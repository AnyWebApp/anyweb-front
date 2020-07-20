import React/* , { useState, useEffect } */ from 'react';
import { useHistory } from "react-router-dom";

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import Footer from '../../commons/Footer/Footer';

import { HomeContainer, HomeMain, LogoContainer, LogoImg } from './styles';

function Home({ onPinChange, onPinSubmit, onSearcheChange, onSearchSubmit, isLogged, inputValue }) {

  const history = useHistory();

  const handleRoot = () => {
    history.push("/search");
  }

  return (
    <HomeContainer>
      {isLogged ? <HomeNavBar color='primary' /> : <HomeNavBar color='secondary' />}
      <HomeMain>
        <LogoContainer>
          <LogoImg src="/logo.svg" alt="logo" className='main-logo' />
        </LogoContainer>
        {
          isLogged
            ?
            <SearchField
              inputValue={inputValue}
              placeholder='listo para la busqueda'
              onClick={onSearchSubmit}
              onChange={onSearcheChange}
            />
            :
            <SearchField
              onSubmit={onPinSubmit}
              onChange={onPinChange}
              inputValue={inputValue}
              placeholder='ingresar PIN'
            />
        }
        <button onClick={handleRoot}>search</button>
      </HomeMain>
      <Footer />
    </HomeContainer>
  );
}

export default Home;