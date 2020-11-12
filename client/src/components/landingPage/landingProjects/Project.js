import React from 'react';
import ProjectList from './ProjectList';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { fetchDetails } from '../../../actions';

const Project = () => {
    const pageStyle = {
        minHeight: '100vh',
        paddingTop: '40px',
    };

    return (
        <div id='projects' style={pageStyle}>
            <Divider />
            <h2
                style={{
                    fontWeight: '100',
                    fontSize: '3rem',
                    fontFamily: 'Roboto, sansSerif',
                    // marginBottom:"30px",
                }}
            >
                Portfolio
            </h2>
            <Divider />
            <ProjectList />
        </div>
    );
};

export default connect(null, fetchDetails)(Project);
