import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
    '@media (max-width: 400px)': {
      width: '100%',
      //background: 'white',
    },
    display: 'flex',
    justify: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: 'auto',
      width: '50%',
    },
  },
  media: {
    height: 400,
    objectFit: 'scale-down',
  },
});

export default function BlogCardSingle(props) {

  // Style hooks
  const classes = useStyles();
  // end style hooks

  return (
    <div className={classes.root}>
    <Card>
      {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          component="img"
          alt={props.alt}
          height="140"
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

