import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  cardContent: {
    maxHeight: 150,
    overflow:"hidden",
  }
});

const ProjectItem = () => {
  const classes = useStyles();

  return (
    <ScrollAnimation animateIn='bounceInRight'>
      <Card 
        className={classes.card}
      >
        <Link to="/">
          <CardActionArea>  
            <CardMedia
              component="img"
              alt="media"
              height="140"
              image="https://images.squarespace-cdn.com/content/v1/5d067e3d70d017000184a49e/1566146566989-YTL6WHDT4Q9KVPKPBBT6/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o/Airbnb-dribbble-milestones2.gif?format=1000w"
              title="TebMik Tube"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Tebmik-Tube
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Video media application using google's, Youtube data API. Search videos with zero limitations and... No advertising.
              </Typography> <br />
              <Typography variant="body2" color="textPrimary" component="p">
                  Front-end application 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  ReactJs | Redux
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button size="large" color="primary">
            <a 
              href="https://travel-c1c5a.firebaseapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              >Live Site
            </a>
          </Button>
          <Button size="large" color="primary">
            <a 
              href="https://github.com/tebmik/videoPlayer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </CardActions>
      </Card>
    </ScrollAnimation>  
  );
}

export default ProjectItem;
