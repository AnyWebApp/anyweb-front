import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './SearchTabs.styles';

import { Tabs, Tab, Typography, Box, Divider } from '@material-ui/core/';

function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography className={classes.font}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className={classes.tabs}
      >
        <Tab label="All" {...a11yProps(0)} className={classes.tab} />
        <Tab label="Images" {...a11yProps(1)} className={classes.tab} />
        <Tab label="Videos" {...a11yProps(2)} className={classes.tab} />
        <Tab label="Maps" {...a11yProps(3)} className={classes.tab} />
        <Tab label="News" {...a11yProps(4)} className={classes.tab} />
        <Tab label="Shopping" {...a11yProps(5)} className={classes.tab} />
      </Tabs>
      <Divider className={classes.divider} />
      <TabPanel value={value} index={0} >
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>

    </div>
  );
}
