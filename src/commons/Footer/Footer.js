import React from 'react';

import { StyledFooter, Button, Disabled } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <Disabled>Settings</Disabled>
      <Button>Privacy</Button>
      <Button>Terms</Button>
    </StyledFooter>
  )
}

export default Footer