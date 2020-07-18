import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import Footer from '../../commons/Footer/Footer';

import { HomeContainer, HomeMain, LogoContainer, LogoImg } from './styles';

function Home() {
  const endpoint = process.env.REACT_APP_ENDPOINT;
  const keyToken = process.env.REACT_APP_TOKEN;
  const keyPins = process.env.REACT_APP_PIN;

  const [inputValue, setInputValue] = useState('');
  const [isLogged, setisLogged] = useState(false);

  const history = useHistory();

  const fetchToken = async () => {
    const endpointToken = `${endpoint}${keyToken}`;
    const tokenResponse = await fetch(endpointToken);
    const newToken = await tokenResponse.json();
    sessionStorage.setItem('token', newToken.token);
  };

  useEffect(() => {
    fetchToken();
    // eslint-disable-next-line
  }, []);

  const token = sessionStorage.getItem('token')

  const fetchPin = async () => {
    const endpointPins = `${endpoint}${keyPins}/${inputValue}`;
    const fetchPinOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    };
    const pinResponse = await fetch(endpointPins, fetchPinOptions);
    const dataString = JSON.stringify(await pinResponse.json());
    if (pinResponse.status === 200) {
      setisLogged(true);
      sessionStorage.setItem('linksData', dataString);
    }
  };

  const handlePinChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  }

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    setInputValue('');
    await fetchPin().catch(error => console.error('Pin Error:', error));
  }

  const handleSearchSubmit = () => {
    history.push("/search");
  }

  const handleSearchChange = (e) => {
    setInputValue(e.target.value)
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