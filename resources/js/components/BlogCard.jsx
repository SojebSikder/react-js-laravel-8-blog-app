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
    maxWidth: 345,
  },
});

export default function BlogCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" component={Link} to={props.link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}



 {/* <div className="card mx-auto" style={{width: '18rem'}}>
    <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.description.length > 400 ? blog.description.substr(1, 400)+  " ....." : blog.description}</p>
        
        <Button  variant="contained" color="primary" component={Link} to={'/blog/'+blog.id}>Read more</Button>
    </div>
</div> */}