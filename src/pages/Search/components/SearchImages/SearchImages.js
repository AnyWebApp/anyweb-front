import React, { useContext } from 'react';
import { Context } from '../../../../Context'

import SearchImagesCard from '../SearchImagesCard/SearchImagesCard';
import { StyledDiv } from './styles';

const SearchImages = () => {

  const searchContext = useContext(Context);

  console.log(searchContext)

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