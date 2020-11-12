import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './landingPage/LandingPage';

import Navbar from './navigation/Navbar';
import Projects from './navigation/projects/Projects';
import About from './navigation/about/About';
import Resume from './navigation/resume/Resume';
import Contact from './navigation/contact/Contact';
import Footer from './footer/Footer';
import SelectedProject from './landingPage/landingProjects/SelectedProject';

import './app.css';

const App = () => {
    return (
        <div className='app'>
            <Navbar className='navbar' />

            <div>
                <Route path='/' exact component={LandingPage} />
                <Route path='/projects/:id' exact component={SelectedProject} />
                <Route path='/about' exact component={About} />
                <Route path='/resume' exact component={Resume} />
                <Route path='/contact' exact component={Contact} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
