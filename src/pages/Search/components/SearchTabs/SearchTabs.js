import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

import { Tabs, Tab, Container, Divider } from '@material-ui/core/';

import SearchAll from '../SearchAll/SearchAll';
import SearchImages from '../SearchImages/SearchImages';
import SearchImagesFilters from '../SearchImagesFilters/SearchImagesFilters';

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

export default function ScrollableTabsButtonAuto({ currentSearch }) {
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
        aria-label="scrollable_tabs"
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
        <SearchAll />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchImagesFilters />
        <SearchImages currentSearch={currentSearch} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SearchAll />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SearchAll />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SearchAll />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SearchAll />
      </TabPanel>

    </div>
  );
}