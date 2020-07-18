import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import Footer from '../../commons/Footer/Footer';

import { HomeContainer, HomeMain, LogoContainer, LogoImg } from './styles';

function Home() {

  const [inputValue, setInputValue] = useState('');
  const [isLogged, setisLogged] = useState(false);
  const token = sessionStorage.getItem('token');

  // todo a un .env
  const endpoint = 'https://any-web-backend.herokuapp.com/api/';
  const keyToken = 'dametoken';
  const keyPins = 'pins/';

  const endpointToken = `${endpoint}${keyToken}`;
  const endpointPins = `${endpoint}${keyPins}${inputValue}`;
  const fetchPinOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };

  const history = useHistory();

  useEffect(() => {
    fetchToken();
    // eslint-disable-next-line
  }, []);

  const fetchToken = async () => {
    const tokenResponse = await fetch(endpointToken);
    const newToken = await tokenResponse.json();
    sessionStorage.setItem('token', newToken.token);
  };

  const fetchPin = async () => {
    const pinResponse = await fetch(endpointPins, fetchPinOptions);
    const data = await pinResponse.json();
    console.log(`data desde la api: ${data}`)
    if (pinResponse.status === 200) {
      setisLogged(true);
      sessionStorage.setItem('data', data);
      const activeLinks = sessionStorage.getItem('data');
      console.log(`data json: ${activeLinks}`)
      const parse = JSON.parse(activeLinks)
      console.log(`data in session: ${parse}`);
    }
  };

  const handlePinChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  }

  const handlePinSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    fetchPin().catch(error => console.error('Pin Error:', error));
  }

  const handleSearchSubmit = () => {
    history.push("/search");
  }

  const handleSearchChange = (e) => {
    setInputValue(e.target.value)
  }

  console.log(`token in session: ${token}`);

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
              onClick={handleSearchSubmit}
              onChange={handleSearchChange}
            />
            :
            <SearchField
              onSubmit={handlePinSubmit}
              onChange={handlePinChange}
              inputValue={inputValue}
              placeholder='ingresar PIN'
            />
        }
      </HomeMain>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
