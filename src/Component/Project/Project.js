import React from 'react';
import projectImage from '../image/project.png';

const Project = () => {
    return (
        <section className="projectSec pb-5 pb-md-0">
            <div className="smallBlueLight"></div>
            <div className="lightBlueLight"></div>

            <div className="container">
                <div className="row align-items-center">
                   
                    <div className="col-md-6 pl-lg-5   order-md-12">
                    <h1 className="customHeading">Stay Running & Project</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        <button className="customButton">Contact us</button>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img className="img-fluid" src={projectImage} alt=""/>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Project;