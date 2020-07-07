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
              image="https://images.unsplash.com/photo-1573497161223-d9c42d7b0bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              title="TebMik Job listings"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Tebmik Job listings.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A user friendly web application which helps you find your next career.
              </Typography> <br />
              <Typography variant="body2" color="textPrimary" component="p">
                   Serverless web application.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  ReactJS | Redux | Firebase
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button size="large" color="primary">
            <a 
              href="https://job-search-32939.web.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              >Live Site
            </a>
          </Button>
          <Button size="large" color="primary">
            <a 
              href="https://github.com/tebmik/jobListing"
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
