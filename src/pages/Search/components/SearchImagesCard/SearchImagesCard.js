import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles'

/* import perro1 from '../../../../assets/images/perro-1.png'*/
import perro2 from '../../../../assets/images/perro-2.jpg'

export default function SearchImagesCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={perro2}
          title="Perro 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            www.perro1.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}