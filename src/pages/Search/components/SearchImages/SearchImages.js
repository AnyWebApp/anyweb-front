import React, { useContext } from 'react';
import { Context } from '../../../../Context';
import SearchImagesCard from '../SearchImagesCard/SearchImagesCard';
import { StyledDiv } from './styles';

const SearchImages = () => {

  const searchContext = useContext(Context);

  const searchData = searchContext.currentSearch.data.dataM

  const items = searchData.map(item =>
    <SearchImagesCard
      key={item.title}
      image={item.link}
      title={item.title}
      contextLink={item.contextLink}
    />
  )

  return (
    <StyledDiv>
      {items}
    </StyledDiv>
  )
};

export default SearchImages;