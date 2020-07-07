import React from 'react';

import { Footer, Button, Disabled } from './styles';

const HomeFooter = () => {
  return (
    <Footer>
      <Disabled>Preferencias</Disabled>
      <Button>Privacidad</Button>
      <Button>Condiciones</Button>
    </Footer>
  )
}

export default HomeFooter