import React from 'react';

import { Container } from './styles'

import SearchNavBar from '../../components/Search/SearchNavBar/SearchNavBar'
import SearchField from '../../components/SearchField/SearchField'
import SearchTabs from '../../components/Search/SearchTabs/SearchTabs'

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
