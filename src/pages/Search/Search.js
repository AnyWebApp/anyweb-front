import React from 'react';

import { Container } from './styles'

import SearchNavBar from './components/SearchNavBar/SearchNavBar'
import SearchField from '../../commons/SearchField/SearchField'
import SearchTabs from './components/SearchTabs/SearchTabs'
import Footer from '../../commons/Footer/Footer'

function Search() {
  return (
    <Container>
      <SearchNavBar />
      <SearchField />
      <SearchTabs />
      <Footer />
    </Container>
  );
}

export default Search;
