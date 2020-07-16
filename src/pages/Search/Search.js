import React from 'react';
import { useHistory } from "react-router-dom";

import { Container } from './styles';

import SearchNavBar from './components/SearchNavBar/SearchNavBar';
import SearchField from '../../commons/SearchField/SearchField';
import SearchTabs from './components/SearchTabs/SearchTabs';
import Footer from '../../commons/Footer/Footer';


function Search() {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <SearchNavBar onClick={handleHomeClick} />
      <SearchField />
      <SearchTabs />
      <Footer />
    </Container>
  );
}

export default Search;
