import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchDetail } from '../../../actions';
import { connect } from 'react-redux';

import Button from '../button/Button';

const ProjectDetail = ({ match, data, fetchDetail }) => {
    const [project, setProject] = useState(match.params.id);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchDetail(project);
    }, []);

    const {
        img,
        screenImage,
        title,
        typographyHeading,
        typographyBody,
        techTools,
        projectHref,
        projectGithub,
        id,
    } = data;

    const imageArr = (img, num) => {
        if (typeof img === 'object' && Array.isArray(img)) return img[num];
    };
    const screenImageArr = (img, num) => {
        if (typeof img === 'object' && Array.isArray(img)) return img[num];
    };
    let image = imageArr(img, 0);
    // let responsiveImage = imageArr(screenImage, 0);

    console.log(image);

    const HeaderWrapper = styled.div`
        height: 100%;
        background-color: var(--color-mainLighter);
        max-width: 1200px;
        margin: 20px auto 0 auto;

        .header-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            height: 100%;
            overflow: hidden;

            .image {
                background-image: url(${image});
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: auto;
                min-height: 300px;
            }
            .detail-wrapper {
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: var(--color-text);
                background-color: var(--color-white);
                text-align: center;

                .title {
                    font-weight: 100;
                    font-size: 26px;
                    color: var(--color-heading);
                }
                .body-typography {
                    font-size: 16px;
                    color: var(--color-textLight);
                }
                .button-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-self: center;
                }
            }
        }
        @media ${props => props.theme.mediaQueries.medium} {
            height: 500px;
            .header-container {
                .detail-wrapper {
                    text-align: left;
                    .button-wrapper {
                        align-self: flex-end;
                    }
                }
            }
        }
    `;

    const BodyWrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: 40px 20px;

        @media ${props => props.theme.mediaQueries.medium} {
            // flex-direction: row;
        }
    `;

    const BodyContent = styled.div`
        display: flex;
        justify-content: center;
        position: relative;
        // background-color: var(--color-white);
        max-width: 1200px;
        margin: 0 auto;

        .screen {
            position: relative;
            // overflow: hidden;
            z-index: 10;
        }
        .screen-picture {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .large-screen {
            width: 300px;
        }
        .tablet-screen {
            width: 300px;
        }
        .mobile-screen {
            width: 300px;
        }

        .large {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -55%);
            width: 260px;
        }
        .tablet {
            left: 50%;
            top: 50%;
            transform: translate(-52%, -53%);
            width: 175px;
        }
        .mobile {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -49.5%);
            width: 187px;
        }

        @media ${props => props.theme.mediaQueries.medium} {
            .large-screen {
                width: 100%;
            }
            .large {
                width: 85%;
                left: 50%;
                top: 20px;
                transform: translateX(-50%);
            }
            .tablet-screen {
                width: 100%;
            }
            .tablet {
                width: 55%;
            }
            .mobile-screen {
                width: 100%;
            }
            .mobile {
                width: 63%;
            }
        }
    `;

    return (
        <>
            <div>
                <HeaderWrapper>
                    <div className='header-container'>
                        <div className='image'></div>
                        <div className='detail-wrapper'>
                            <h1 className='title'>{typographyHeading}</h1>
                            <br />
                            <p className='body-typography'>{typographyBody}</p>
                            <div className='button-wrapper'>
                                <Button
                                    className='button'
                                    title='Live Site'
                                    variant='outlined'
                                    color='primary'
                                    size='large'
                                    link={projectHref}
                                    target='_blank'
                                />
                                <Button
                                    className='button'
                                    variant='outlined'
                                    color='secondary'
                                    size='large'
                                    link={projectGithub}
                                    title='GitHub'
                                    icon
                                    target='_blank'
                                />
                            </div>
                        </div>
                    </div>
                </HeaderWrapper>
                <BodyWrapper>
                    <BodyContent>
                        <img
                            className='screen large-screen'
                            src='/projectImages/screens/large.png'
                            alt=''
                        />
                        <img
                            className='screen-picture large'
                            src={screenImageArr(screenImage, 2)}
                            alt=''
                        />
                    </BodyContent>
                    <BodyContent>
                        <img
                            className='screen tablet-screen'
                            src='/projectImages/screens/tablet.png'
                            alt=''
                        />
                        <img
                            className='screen-picture tablet'
                            src={screenImageArr(screenImage, 1)}
                            alt=''
                        />
                    </BodyContent>
                    <BodyContent>
                        <img
                            className='screen mobile-screen'
                            src='/projectImages/screens/mobile.png'
                            alt=''
                        />
                        <img
                            className='screen-picture mobile'
                            src={screenImageArr(screenImage, 0)}
                            alt=''
                        />
                    </BodyContent>
                </BodyWrapper>
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
