import React from 'react'

import { Tabs, Tab } from '@material-ui/core';
import { useStyles } from './styles.js'


export default function HomeTabs() {
  const [value, setValue] = React.useState(1);

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleTabs}
      aria-label=""
    >
      <Tab className={classes.root} label="All" />
      <Tab className={classes.root} label="Images" />

    </Tabs>
  )
}