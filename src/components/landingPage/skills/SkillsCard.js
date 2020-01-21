import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent:"center",
    minHeight:"100%",
    marginBottom:"40px",
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(23),
      height: theme.spacing(23),
    },
  },
  paperContainer: {
    display:'grid',
    gridTemplateColumns:"1fr",
    gridTemplateRows:"1fr 1fr 1fr 1fr 1fr",
    padding:"15px",
    gridGap:"10px",
  },
}));

const SkillsCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paperContainer} elevation={3} >
        <span>
          <i 
            style={{fontSize:"22px", marginBottom:"15px"}} 
            className="computer icon" >
          </i>
        </span>
        <span>ReactJS</span>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>Javascript</span>
      </Paper>
      <Paper className={classes.paperContainer} elevation={3} >
        <span>
          <i 
            style={{fontSize:"22px", marginBottom:"15px"}} 
            className="server icon">
          </i>
        </span>
        <span>Node</span>
        <span>express</span>
        <span>Php</span>
      </Paper>
      <Paper className={classes.paperContainer} elevation={3} >
        <span>
          <i 
            style={{fontSize:"22px", marginBottom:"15px"}} 
            className="database icon">
          </i>
        </span>
        <span>MongoDB</span>
        <span>MySql</span>
      </Paper>
    </div>
  );
}

export default SkillsCard;