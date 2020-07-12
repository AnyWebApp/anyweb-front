import React from 'react';

import { Footer, Button, Disabled } from './styles';

const HomeFooter = () => {
  return (
    <Footer>
      <Disabled>Settings</Disabled>
      <Button>Privacy</Button>
      <Button>Terms</Button>
    </Footer>
  )
}

export default HomeFooter