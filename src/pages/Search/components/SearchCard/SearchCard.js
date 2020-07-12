import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: '1px solid #ccc',
    boxShadow: '0 1px 6px rgba(32, 33, 36, 0.28);',
    borderRadius: '8px',
    margin: '10px '
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    padding: '5px 0'
  },
  url: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SearchCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent >
        <Typography className={classes.url} gutterBottom>
          https://www.google.com
        </Typography>
        <Typography variant="h5" component="h2" color='primary' className={classes.title}>
          Browse All of Google's Products & Services - Google
        </Typography>
        <Typography variant="body2" component="p" className={classes.description}>
          Browse a list of Google products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.
        </Typography>
      </CardContent>
    </Card>
  );
}