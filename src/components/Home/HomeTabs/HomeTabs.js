import React from 'react'

import { Tabs, Tab } from '@material-ui/core';
import { useStyles } from './styles.js'

export default function HomeTabs({ color }) {
  const [value, setValue] = React.useState(0);

  const handleTabs = (newValue) => {
    setValue(newValue);
  };

  const classes = useStyles({ color });

  return (
    <Tabs
      value={value}
      indicatorColor={color}
      textColor={color}
      onChange={handleTabs}
      aria-label="home tabs"
    >
      <Tab
        className={classes.root}
        label="All"
      />
      <Tab
        className={classes.root}
        label="Images"
      />
    </Tabs>
  )
}