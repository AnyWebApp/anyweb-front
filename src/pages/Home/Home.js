import React, { useState } from 'react';

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import Footer from '../../commons/Footer/Footer';

import { HomeMain, LogoContainer, LogoImg } from './styles';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const endpoint = 'https://any-web-backend.herokuapp.com/api/';

  const fetchToken = async () => {
    console.log('llamada a token');
    const keyToken = 'dametoken';
    const endpointToken = `${endpoint}${keyToken}`;
    const tokenResponse = await fetch(endpointToken);
    const token = await tokenResponse.json();
    console.log(token);

    // Pedido de origen cruzado bloqueado: La política de mismo origen no permite leer el recurso remoto en https://any-web-backend.herokuapp.com/api/dametoken. (Razón: encabezado CORS 'Access-Control-Allow-Origin' faltante). 

    // Docs : https://developer.mozilla.org/es/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin?utm_source=devtools&utm_medium=firefox-cors-errors&utm_campaign=default

    // paquete de NPM para cors en node: https://www.npmjs.com/package/cors

    // otro link util : https://dzone.com/articles/cors-in-node
  }

  const fetchPin = async () => {
    console.log('llamada a pin');
    const keyPins = 'pins';
    const endpointPins = `${endpoint}${keyPins}`;
    const fetchOptions = {
      method: 'POST',
      mode: 'cors',
      body: { 'pin': 'AAB' },
      headers: { 'Content-Type': 'application/json' },
    };
    const pinResponse = await fetch(endpointPins, fetchOptions);
    const pin = await pinResponse.json();
    console.log(pin);

    // El request va a tener que ser POST ya que no un GET con body no respeta el protocolo
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
    console.log(inputValue);
  }

  fetchToken().catch(error => console.error('Token Error:', error));

  const handlePin = (e) => {
    e.preventDefault();
    fetchPin().catch(error => console.error('Pin Error:', error));
    setIsLogin(true);
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
            ?// Componente para busquedas
            <SearchField
              inputValue={inputValue}
              placeholder='listo para la busqueda'
            />
            :
            <SearchField // componenete para ingresar el PIN
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
