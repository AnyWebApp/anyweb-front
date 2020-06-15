import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './SearchField.styles';

export default function SearchField(props) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        inputProps={{ 'aria-label': 'search google' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon style={{ color: 'white' }} />
      </IconButton>
    </Paper>
  );
}
