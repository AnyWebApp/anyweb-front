import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function App() {
  const endpoint = process.env.REACT_APP_ENDPOINT;
  const keyToken = process.env.REACT_APP_TOKEN;
  const keyPins = process.env.REACT_APP_PIN;
  const searchEndpoint = process.env.REACT_APP_SEARCHENDPOINT;

  const [inputValue, setInputValue] = useState('');
  const [isLogged, setisLogged] = useState(false);
  const [currentSearch, setCurrentSearch] = useState()

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

  const fetchSearch = async () => {
    const fetchSearchOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    };
    const endpointSearch = `${searchEndpoint}`;
    const searchResponse = await fetch(endpointSearch, fetchSearchOptions);
    const newSearchResponse = await searchResponse.json();
    setCurrentSearch(newSearchResponse);
  };

  const handlePinChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  }

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    setInputValue('');
    await fetchPin().catch(error => console.error('Pin Error:', error));
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    fetchSearch()
  }

  const handleSearchChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            isLogged={isLogged}
            onPinChange={handlePinChange}
            onPinSubmit={handlePinSubmit}
            onSearcheChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
            inputValue={inputValue}
          />
        </Route>
        <Route exact path="/search">
          <Search
            inputValue={inputValue}
            currentSearch={currentSearch}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
