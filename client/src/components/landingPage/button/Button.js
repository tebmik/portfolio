import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        textAlign: 'center',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gridRowGap: '10px',
        maxWidth: '400px',
        '& > *': {
            margin: theme.spacing(2),
            gridGap: '1rem',
        },
    },
}));

const Buttons = ({
    variant,
    color,
    size,
    link,
    title = 'submit',
    icon,
    target,
}) => {
    const classes = useStyles();

    return (
        <div
            style={{
                margin: '0 auto',
            }}
            className={classes.root}
        >
            <Button variant={variant} color={color} size={size}>
                {icon ? (
                    <GitHubIcon
                        style={{ marginRight: '10px' }}
                        fontSize='small'
                    />
                ) : null}
                <a
                    color='secondary'
                    href={link}
                    target={target}
                    rel='noopener noreferrer'
                >
                    {title}
                </a>
            </Button>
        </div>
    );
};

export default Buttons;
