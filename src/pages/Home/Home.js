import React from 'react';
import { Context } from '../../Context';
import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import Footer from '../../commons/Footer/Footer';
import { HomeContainer, HomeMain, LogoContainer, LogoImg } from './styles';

function Home({ inputValue, onSearchSubmit, onSearcheChange, onPinChange, onPinSubmit, isLogged }) {

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
      </HomeMain>
      <Footer />
    </HomeContainer>
  )
    ;
}

export default Home;