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
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    cardContent: {
        maxHeight: 150,
        overflow: 'hidden',
    },
});

const ProjectItem = ({
    image,
    title,
    typographyHeading,
    typographyBody,
    techTools,
    projectHref,
    projectGithub,
    id,
}) => {
    const classes = useStyles();

    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <Card className={classes.card}>
                <Link to={`/projects/${id}`}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            alt='Project image'
                            height='140'
                            image={image[0]}
                            title={title}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='h2'
                            >
                                {typographyHeading}
                            </Typography>
                            <Typography
                                variant='body2'
                                color='textSecondary'
                                component='p'
                            >
                                {typographyBody}
                            </Typography>
                            <br />
                            {/* <Typography
                            variant='body2'
                            color='textPrimary'
                            component='p'
                        >
                            Full-Stack Website
                        </Typography> */}
                            <Typography
                                variant='body2'
                                color='textSecondary'
                                component='p'
                            >
                                {techTools}
                            </Typography>
                        </CardContent>
                        <br />
                    </CardActionArea>
                </Link>
                <CardActions>
                    <Button size='large' color='primary'>
                        <a
                            href={projectHref}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Live Site
                        </a>
                    </Button>
                    {projectGithub ? (
                        <Button size='large' color='primary'>
                            <a
                                href={projectGithub}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                GitHub
                            </a>
                        </Button>
                    ) : null}
                </CardActions>
            </Card>
        </ScrollAnimation>
    );
};

export default ProjectItem;
