import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

import { Tabs, Tab, Container, Divider } from '@material-ui/core/';

import SearchCard from '../SearchCard/SearchCard';

function TabPanel(props) {
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
        <Container p={2} disableGutters={true}>
          {children}
        </Container>
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
      <TabPanel value={value} index={0}>
        <SearchCard />
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