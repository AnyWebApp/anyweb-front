import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    height: 35,
    margin: 5,
    background: '#F5F5F5',
    textTransform: 'none',
  },
});

export default function SignInButton() {
  const classes = useStyles();
  return (
    <Button className={classes.root} variant="outlined" color="default" size="small">
      Sign in
    </Button>
  )
}