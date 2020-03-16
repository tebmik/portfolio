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
    <ScrollAnimation animateIn='fadeInUp'>
      <Card 
        className={classes.card}
      >
        <Link to="/">
          <CardActionArea>  
            <CardMedia
              component="img"
              alt="media"
              height="140"
              image="https://i.ytimg.com/vi/GfKs8oNP9m8/mqdefault.jpg"
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
