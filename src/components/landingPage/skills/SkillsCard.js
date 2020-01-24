import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    justifyContent:"center",
    justifyItems:"center",
    minHeight:"100vh",
    margin:"40px 0 0 0",
    gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
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
    <div>
      <Divider />
      <h2 
        style={{
          fontWeight:"100",
          fontSize:"3rem",
          fontFamily: "Roboto, sansSerif"
        }}>
        Technical Skills
      </h2>
      <Divider />
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
    </div>
  );
}

export default SkillsCard;