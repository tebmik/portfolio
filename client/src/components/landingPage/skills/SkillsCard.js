import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ScrollAnimation from 'react-animate-on-scroll';



    
const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    justifyContent:"center",
    justifyItems:"center",
    minHeight:"100vh",
    padding:"80px 0",
    gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",
  },
  paperContainer: {
    display:'grid',
    gridTemplateColumns:"1fr",
    gridTemplateRows:"1fr 1fr",
    padding:"15px",
    gridGap:"10px",
    margin: theme.spacing(1),
    width: theme.spacing(30),
    height: theme.spacing(30),
    overflow:"hidden"
  },
}));

const SkillsCard = () => {
  const classes = useStyles();
  const icon = {
    fontSize:"5rem",
    color:"rgba(0,0,0,0.5)", 
    marginBottom:"15px"
  }
  const para = {
    fontSize:"16px",
    fontFamily:"Montserrat, sansSerif",
    display:'block',
    margin:"7px"
  }

  return (
    <div style={{paddingTop: "80px"}}>
      <ScrollAnimation 
          animateIn='fadeIn'
          delay="400"
          >
        <Divider />
        <h2 
          style={{
            fontWeight:"100",
            fontSize:"3rem",
            fontFamily: "Roboto, sansSerif",
            
          }}>
          Technical Skills
        </h2>
        <Divider />
      </ScrollAnimation>
      <div className={classes.root}>
        <ScrollAnimation 
          animateIn='fadeIn'
          >
          <Paper 
            className={classes.paperContainer} 
            elevation={10} >
            <span>
              <ScrollAnimation 
                animateIn='fadeIn'
                delay="250"
                >
                <i 
                  style={icon} 
                  className="computer icon" >
                </i>
              </ScrollAnimation> 
            </span>
            <div>
              <span style={para}>ReactJS</span>
              <span style={para}>HTML5</span>
              <span style={para}>CSS3</span>
              <span style={para}>Javascript</span>
            </div>
          </Paper>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'>
          <Paper className={classes.paperContainer} elevation={10} >
            <span>
              <ScrollAnimation 
                  animateIn='fadeIn'
                  delay="250"
                  >
                <i 
                  style={icon}
                  className="server icon">
                </i>
              </ScrollAnimation>
            </span>
            <div>
              <span style={para} >Node</span>
              <span style={para} >express</span>
              <span style={para} >Php</span>
            </div>
          </Paper>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'>
          <Paper className={classes.paperContainer} elevation={10} >
            <span>
              <ScrollAnimation 
                  animateIn='fadeIn'
                  delay="250"
                  >
                <i 
                  style={icon} 
                  className="database icon">
                </i>
              </ScrollAnimation> 
            </span>
            <div>
              <span style={para} >MongoDB</span>
              <span style={para} >MySql</span>
            </div>
          </Paper>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default SkillsCard;