import React from 'react';

import SearchImagesCard from '../SearchImagesCard/SearchImagesCard';
import { StyledDiv } from './styles';

const SearchImages = ({ currentSearch }) => {
  console.log('current search:' + currentSearch)
  const searchArray = currentSearch;

  /* const links = searchArray.map(link => 
    <SearchImagesCard key={link.title}>{link.title}</SearchImagesCard>
    )
 */

  return (
    <StyledDiv>
      <SearchImagesCard />
      <SearchImagesCard />
      <SearchImagesCard />
      <SearchImagesCard />
    </StyledDiv>
  )
};

export default SearchImages;