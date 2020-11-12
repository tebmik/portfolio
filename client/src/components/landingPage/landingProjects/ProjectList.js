import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../../../actions';
import ProjectOne from './projectItems/ProjectOne';
import ProjectTwo from './projectItems/ProjectTwo';
import ProjectThree from './projectItems/ProjectThree';
import ProjectFour from './projectItems/ProjectFour';
import ProjectItem from './projectItems/ProjectItem';

const listGrid = {
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gridTemplateRows: 'auto',
    gridGap: '20px',
    marginTop: '40px',
};

const ProjectList = ({ error, loading, data, fetchDetails }) => {
    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);

    const renderProject = () => {
        const project = data.map((project, index) => {
            const {
                id,
                img,
                projectGithub,
                projectHref,
                techTools,
                title,
                typographyHeading,
                typographyBody,
            } = project;
            return (
                <ProjectItem
                    id={id}
                    key={index}
                    image={img}
                    title={title}
                    typographyHeading={typographyHeading}
                    typographyBody={typographyBody}
                    techTools={techTools}
                    projectHref={projectHref}
                    projectGithub={projectGithub}
                />
            );
        });
        return project;
    };

    return (
        <div style={listGrid}>
            {renderProject()}
            {/* <ProjectOne />
            <ProjectTwo />
            <ProjectThree />
            <ProjectFour /> */}
            {/* <ProjectItem
                id='1'
                image='projectImages\deeFrost.png'
                title='Dee Frost Jewellery'
                typographyHeading='Dee Frost Jewellery'
                typographyBody='Website for independant, local Jewellery business.
                Supporting ethical materials to produce high-end
                products. <br />
                Eco-webhosting has been used for this website to
                meet the ethical needs of the client.'
                techTools='HTML5 | CSS3 | Javascript | PHP | MySql'
                projectHref='http://www.deefrostjewellery.com/'
                projectGithub='https://github.com/tebmik/deefrostjewellery'
            />
            <ProjectItem
                id='2'
                image='https://images.unsplash.com/photo-1573497161223-d9c42d7b0bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                title='TebMik Job listings'
                typographyHeading='Tebmik Job listings.'
                typographyBody='A user friendly web application which helps you
                find your next career. Type in "what" &amp; "Where" into the search fields and connect to the employers.'
                techTools='ReactJS | Redux | Firebase'
                projectHref='https://job-search-32939.web.app/'
                projectGithub='https://github.com/tebmik/jobListing'
            />
            <ProjectItem
                id='3'
                image='https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
                title='Weather App'
                typographyHeading='Weather Trip'
                typographyBody="Weather application making use of third-party
                API's to retrieve the most accurate
                representation of the current weather
                conditions."
                techTools='ReactJS'
                projectHref='https://weather-77b1b.web.app/'
                projectGithub='https://github.com/tebmik/weatherApp'
            />
            <ProjectItem
                id='4'
                image='https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                title='Stripe Application'
                typographyHeading='One itemBrand'
                typographyBody='A small ecommerce project making use of Stripe
                to accept credit cards, manage subscriptions,
                send money, run a marketplace.'
                techTools='NodeJS | Bootstrap | Stripe'
                projectHref='https://serene-refuge-99455.herokuapp.com/'
                // projectGithub='https://github.com/tebmik/weatherApp'
            /> */}
        </div>
    );
};

const mapStateToProps = ({ project }) => {
    return {
        error: project.error,
        loading: project.loading,
        data: project.data,
    };
};

const mapDispatchToProps = {
    fetchDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
