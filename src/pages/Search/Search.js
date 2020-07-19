import React from 'react';
import { useHistory } from "react-router-dom";

import { Container } from './styles';

import SearchNavBar from './components/SearchNavBar/SearchNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import SearchTabs from './components/SearchTabs/SearchTabs';
import Footer from '../../commons/Footer/Footer';


function Search({ inputValue, currentSearch, onSearchSubmit, onSearcheChange }) {
  const history = useHistory();

  console.log(currentSearch)

  const handleHomeClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <SearchNavBar onClick={handleHomeClick} />
      <SearchField
        inputValue={inputValue}
        onClick={onSearchSubmit}
        onChange={onSearcheChange}
      />
      <SearchTabs currentSearch={currentSearch} />
      <Footer />
    </Container>
  );
}

export default Search;
