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
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <Card className={classes.card}>
                {/* <Link to="/projects"> */}
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="jewellery"
                        height="140"
                        // image="http://www.deefrostjewellery.com/gallery_img/bracelets/img_41.jpg"
                        image="projectImages\deeFrost.png"
                        title="Dee Frost Jewellery"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Dee Frost Jewellery
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p">
                            Website for independant, local Jewellery business.
                            Supporting ethical materials to produce high-end
                            products. <br />
                            Eco-webhosting has been used for this website to
                            meet the ethical needs of the client.
                        </Typography>
                        <br />
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p">
                            Full-Stack Website
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p">
                            HTML5 | CSS3 | Javascript | PHP | MySql
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* </Link> */}
                <CardActions>
                    <Button size="large" color="primary">
                        <a
                            href="http://www.deefrostjewellery.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Live Site
                        </a>
                    </Button>
                    <Button size="large" color="primary">
                        <a
                            href="https://github.com/tebmik/deefrostjewellery"
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
