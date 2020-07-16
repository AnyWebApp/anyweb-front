import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import Footer from '../../commons/Footer/Footer';

import { HomeMain, LogoContainer, LogoImg } from './styles';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLogged, setisLogged] = useState(false);
  const [token, setToken] = useState('');
  const [userActiveLinks, setUserActiveLinks] = useState([])
  // todo a un .env
  const endpoint = 'https://any-web-backend.herokuapp.com/api/';
  const keyToken = 'dametoken';
  const keyPins = 'pins/';
  //-----------
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
  //-------------------//
  const history = useHistory();

  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    const tokenResponse = await fetch(endpointToken);
    const newToken = await tokenResponse.json();
    setToken(newToken.token);
  };

  const fetchPin = async () => {
    const pinResponse = await fetch(endpointPins, fetchPinOptions);
    const data = await pinResponse.json();
    if (pinResponse.status === 200) {
      setisLogged(true);
      setUserActiveLinks(data.pinData)
    }
  };

  const handlePinChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  }

  const handlePinSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    console.log(inputValue);
    fetchPin().catch(error => console.error('Pin Error:', error));
  }

  const handleSearchSubmit = () => {
    history.push("/search");
  }
  const handleSearchChange = (e) => {
    setInputValue(e.target.value)
  }

  console.log(userActiveLinks);

  return (
    <>
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
    </>
  );
}

export default Home;
