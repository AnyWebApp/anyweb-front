import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import RestoreIcon from '@material-ui/icons/Restore';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import SettingsIcon from '@material-ui/icons/Settings';
import PolicyIcon from '@material-ui/icons/Policy';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

import { Drawer, AppBar, Tabs, Tab, Divider, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


export default function HomeNavBar() {
  const [value, setValue] = React.useState(2);

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    };
  }

  const ItemsList = [
    {
      text: 'Home',
      icon: <HomeIcon />
    },
    {
      text: 'Search activity',
      icon: <RestoreIcon />,
    },
    {
      text: 'Collections',
      icon: <BookmarksIcon />,
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />,
    },
    {
      text: 'Your data in Search',
      icon: <PolicyIcon />,
    },
    {
      text: 'How Search works',
      icon: <FindInPageIcon />,
    },
    {
      text: 'Help',
      icon: <HelpIcon />,
    },
    {
      text: 'Send feedback',
      icon: <FeedbackIcon />,
    }
  ]

  return (
    <nav>
      <Drawer onClose={toggleDrawer(false)} open>
        <List>
          {ItemsList.map((item, index) => {
            const { text, icon } = item;
            return (
              <ListItem key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            )
          })}
        </List>
        <Divider />
      </Drawer>
      <AppBar color='transparent'>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabs}
          aria-label=""
        >
          <Button onClick={toggleDrawer}>
            <MenuIcon />
          </Button>
          <Tab label="All" />
          <Tab label="Images" />
        </Tabs>
      </AppBar>
    </nav>
  )
}