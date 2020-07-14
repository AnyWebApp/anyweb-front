import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import RestoreIcon from '@material-ui/icons/Restore';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import SettingsIcon from '@material-ui/icons/Settings';
import PolicyIcon from '@material-ui/icons/Policy';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export default function DrawerList() {

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
    <List>
      {ItemsList.map((item) => {
        const { text, icon } = item;
        return (
          <ListItem key={text}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
          </ListItem>
        )
      })}
    </List>

  )
}