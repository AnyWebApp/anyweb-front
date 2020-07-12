import React from 'react';

import { Container } from './styles'

import SearchNavBar from './components/SearchNavBar/SearchNavBar'
import SearchField from '../../commons/SearchField/SearchField'
import SearchTabs from './components/SearchTabs/SearchTabs'

function Search() {
  return (
    <Container>
      <SearchNavBar />
      <SearchField />
      <SearchTabs />
    </Container>
  );
}

export default Search;
