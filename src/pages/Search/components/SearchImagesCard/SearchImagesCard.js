import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles'

export default function SearchImagesCard({ image, title, contextLink }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom variant="h6" component="h2"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography
            variant="body2" color="textSecondary"
            component="p"
            className={classes.url}
          >
            {contextLink}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}