import React from 'react';
import Button from './button/Button';
import SkillsCard from './skills/SkillsCard';
import Project from './landingProjects/Project';
import Responsive from './responsive/Responsive';
import Services from './services/Services';
import Divider from '@material-ui/core/Divider';

import ScrollAnimation from 'react-animate-on-scroll';

const pageContainer = {
    padding: '0 20px',
    textAlign: 'center',
    position: 'relative',
    margin: '0 auto',
    maxWidth: '1200px',
};

const homeHero = {
    minHeight: '100vh',
    // height:"100%",
    position: 'relative',
    // background: "radial-gradient(#3DADF2, #020F59)",
    minWidth: '100%',
    margin: '0 auto',
    overflow: 'hidden',

    // backgroundImage:"url('https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')",
    // backgroundPosition:"center",
    // backgroundRepeat:"no-repeat",
    // backgroundSize:"cover",
    // backgroundAttachment:"fixed",
    // transform:"translateY(-65px)",
    clip: 'rect(0, auto, auto, 0)',
};
const heroContent = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100%',
    // padding:"20px",
    textAlign: 'center',
    // position: "fixed",
    maxWidth: '1200px',
};

const overflow = {
    overflow: 'hidden',
};

const Icon = {
    fontSize: '2.5rem',
    color: 'rgba(0,0,0,0.5)',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
};

const title = {
    fontSize: '3.2em',
    fontWeight: '100',
    // marginBottom:"40px",
    fontFamily: 'Roboto',
    paddingLeft: '10px',
    textAlign: 'center',
};

const span = {
    fontFamily: 'Roboto',
    fontSize: '1em',
    fontStyle: 'italic',
};

const logo = '<tl>';

const LandingPage = () => {
    return (
        <div>
            <div style={pageContainer}>
                <div style={homeHero}>
                    <div style={heroContent}>
                        <div
                            style={{
                                paddingBottom: '30px',
                            }}
                        >
                            <ScrollAnimation
                                animateIn='fadeInDown'
                                animateOnce={true}
                            >
                                <i style={Icon} className='icon circular'>
                                    {logo}
                                </i>
                            </ScrollAnimation>
                        </div>

                        <ScrollAnimation
                            animateIn='fadeInUp'
                            offset='10'
                            animateOnce={true}
                        >
                            <Divider />
                            <h2 style={title}>
                                Creative Web Development &amp;
                                <span style={span}> Design, </span>
                            </h2>
                            <Divider />
                            <div
                                style={{
                                    marginTop: '30px',
                                }}
                            >
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    size='large'
                                    link='#projects'
                                    title='Portfolio'
                                />
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    size='large'
                                    link='https://github.com/tebmik'
                                    title='GitHub'
                                    icon
                                    target='_blank'
                                />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}
                >
                    <div className={overflow}>
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                            <Project />
                        </ScrollAnimation>
                    </div>
                    <div className={overflow}>
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                            <Services />
                        </ScrollAnimation>
                        <div className={overflow}>
                            <ScrollAnimation
                                animateIn='fadeIn'
                                animateOnce={true}
                            >
                                <Responsive />
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className={overflow}>
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                            <SkillsCard />
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
