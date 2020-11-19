import React from 'react';

import happyClient from '../image/happy@2x.png';
import marketing from '../image/marketing@2x.png';
import crazyMind from '../image/surface1@2x.png';
import runningProject from '../image/transportation@2x.png';

const Achievement = () => {
    return (
        <section className="achmtSec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 pr-lg-5 mb-4">
                         <h1 className="customHeading">Our Achievements</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    </div>
                    <div className="col-lg-7 mb-4">
                        <div className="row">
                            <div className="col-sm-6 mb-4 singleAchmt">
                                <div className="achmtContent d-flex align-items-center justify-content-center">
                                    <div className="">
                                        <img src={happyClient} alt=""/>
                                    </div>
                                    <div className="achmtHeading">
                                        <h1>700+</h1>
                                        <h6>Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-4 singleAchmt">
                                <div className="achmtContent d-flex align-items-center justify-content-center">
                                    <div className="">
                                        <img src={marketing} alt=""/>
                                    </div>
                                    <div className="achmtHeading">
                                        <h1>140+</h1>
                                        <h6>Projects Completed</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-4 singleAchmt">
                                <div className="achmtContent d-flex align-items-center justify-content-center">
                                    <div className="">
                                        <img src={crazyMind} alt=""/>
                                    </div>
                                    <div className="achmtHeading">
                                        <h1>25+</h1>
                                        <h6>Crazy Minds</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-4 singleAchmt">
                                <div className="achmtContent d-flex align-items-center justify-content-center">
                                    <div className="">
                                        <img src={runningProject} alt=""/>
                                    </div>
                                    <div className="achmtHeading">
                                        <h1>75+</h1>
                                        <h6>Running Projects</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;