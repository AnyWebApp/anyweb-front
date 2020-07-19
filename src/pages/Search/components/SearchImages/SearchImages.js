import React from 'react';

import SearchImagesCard from '../SearchImagesCard/SearchImagesCard';
import { StyledDiv } from './styles';

const SearchImages = ({ currentSearch }) => {
  console.log(currentSearch)
  const searchArray = currentSearch;
  console.log(searchArray)
  /* const links = searchArray.map(link => <SearchImagesCard key={link.title}>{link.title}</SearchImagesCard>)
 */
  return (
    <StyledDiv>

      {/* {links} */}
    </StyledDiv>
  )
};

export default SearchImages;