import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    cardContent: {
        maxHeight: 150,
        overflow: "hidden",
    },
});

const ProjectItem = () => {
    const classes = useStyles();

    return (
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay="300">
            <Card className={classes.card}>
                <Link to="/">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="weather"
                            height="140"
                            image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
                            title="Weather App"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2">
                                Weather Trip
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p">
                                Weather application making use of third-party
                                API's to retrieve the most accurate
                                representation of the current weather
                                conditions.
                            </Typography>
                            <br />
                            <Typography
                                variant="body2"
                                color="textPrimary"
                                component="p">
                                Front-end appliction.
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p">
                                ReactJS
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions>
                    <Button size="large" color="primary">
                        <a
                            href="https://weather-77b1b.web.app/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Live Site
                        </a>
                    </Button>
                    <Button size="large" color="primary">
                        <a
                            href="https://github.com/tebmik/weatherApp"
                            target="_blank"
                            rel="noopener noreferrer">
                            GitHub
                        </a>
                    </Button>
                </CardActions>
            </Card>
        </ScrollAnimation>
    );
};

export default ProjectItem;
