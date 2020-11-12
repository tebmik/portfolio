import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchDetail } from '../../../actions';
import { connect } from 'react-redux';
const ProjectDetail = ({ match, data, fetchDetail }) => {
    const headerWrapper = {
        width: '100%',
        height: '500px',
        backgroundColor: 'gray',
    };
    const headerContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        height: '100%',
        overflow: 'hidden',
    };
    const headerImage = {
        backgroundColor: 'lightblue',
        height: '100%',
        width: '100%',
    };

    const detailWrapper = {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#333',
        backgroundColor: '#fff',
    };

    const bodyTypography = {
        fontSize: '18px',
    };

    const wrapperStyle = {
        maxWidth: '1120px',
        margin: '0 auto',
        paddingTop: '100px',
    };
    const containerStyle = {
        padding: '20px',
    };

    const [project, setProject] = useState(match.params.id);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchDetail(project);
    }, []);

    const {
        img,
        title,
        typographyHeading,
        typographyBody,
        techTools,
        projectHref,
        projectGithub,
        id,
    } = data;
    console.log(img);
    return (
        <>
            <div>
                <div style={headerWrapper}>
                    <div style={headerContainer}>
                        <div>
                            <img style={headerImage} src='' alt='' />
                        </div>
                        <div style={detailWrapper}>
                            <h1>{typographyHeading}</h1>
                            <p style={bodyTypography}>{typographyBody}</p>
                            <div>
                                <button className='button'>Live Site</button>
                                <button className='button'>GitHub</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={containerStyle}>{title}</div>
            </div>
        </>
    );
};

const mapStateToProps = ({ project }) => {
    return {
        loading: project.loading,
        error: project.error,
        data: project.data,
    };
};

const mapDispatchToProps = {
    fetchDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
