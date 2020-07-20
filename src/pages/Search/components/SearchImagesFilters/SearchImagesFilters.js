import React from 'react';

import { StyledDiv } from './styles';
import { imagesFilters } from '../../../text.js';

const SearchImages = () => {

  return (
    <StyledDiv>
      {imagesFilters.map(filter => <p key={filter}>{filter}</p>)}
    </StyledDiv>
  )
};

export default SearchImages;