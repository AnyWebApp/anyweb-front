import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import { useStyles } from './styles'

export default function SearchAllCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent >
        {/*  hardcodeado provisorio */}
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