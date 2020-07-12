import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';

export default function SearchField({ onSubmit, onChange, inputValue }) {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={classes.root}
      onSubmit={onSubmit}
    >
      <InputBase
        className={classes.input}
        inputProps={{ 'aria-label': 'search google' }}
        onChange={onChange}
        value={inputValue}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon className={classes.searchIcon} />
      </IconButton>

    </Paper>
  );
}
