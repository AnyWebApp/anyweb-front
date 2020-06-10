import React from 'react'

import { Tabs, Tab } from '@material-ui/core';
import { styled as MuiStyled } from '@material-ui/core/styles';

export default function HomeTabs() {
  const [value, setValue] = React.useState(2);

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const MyTab = MuiStyled(Tab)({
    padding: 5
  });

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleTabs}
      aria-label=""
    >
      <MyTab label="All" />
      <MyTab label="Images" />
    </Tabs>
  )
}