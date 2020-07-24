import React, { useState } from 'react';
import { Context } from './Context';
import axios from 'axios';
import { Switch, Route, useHistory } from "react-router-dom";
import { endpoint, keyPin, keySearch, fetchOptions } from './constants';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';


function App() {
  const history = useHistory()

  const [inputValue, setInputValue] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [currentSearch, setCurrentSearch] = useState([]);

  const getUserData = async () => {
    const endpointPins = `${endpoint}pins/${inputValue}`;
    try {
      const userData = await axios.get(endpointPins, fetchOptions);
      setIsLogged(true);
      const dataString = JSON.stringify(userData);
      sessionStorage.setItem('linksData', dataString);

    } catch (error) {
      console.error(error)
    }
  };

  const getCurrentSearch = async () => {
    try {
      const endpointSearch = `${endpoint}${keySearch}`;
      const searchResponse = await axios.get(endpointSearch, fetchOptions);
      setCurrentSearch(searchResponse);
    } catch (error) {
      console.error(error)
    }
  };

  const handlePinChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  }

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    setInputValue('');
    await getUserData().catch(error => console.error('Pin Error:', error));
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    getCurrentSearch()
    history.push('/search')
    console.log('search: ' + inputValue)
  }

  const handleSearchChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <Context.Provider value={{
      currentSearch,
      setCurrentSearch,
      inputValue,
      setInputValue,
      handleSearchChange,
      handleSearchSubmit,
      getCurrentSearch,
      handlePinChange,
      handlePinSubmit,
      isLogged
    }}>
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
            onSearcheChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
            inputValue={inputValue}
          />
        </Route>
      </Switch>

    </Context.Provider >
  )
}

export default App;
