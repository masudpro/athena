import React from 'react';
import Header from '../Header/Header';
import bannerImage from '../image/banner.png';

const Banner = () => {
    return (
        <section className="banner">
            <div className="bannerLineBg"></div>
            <div className="navBg"></div>
            <div className="navDot"></div>
            <div className="bannerRightBg"></div>
            <div className="bannerDot"></div>
            <div className="studioTop"></div>
            <div className="studioBottom"></div>
            <div className="blueLight"></div>
            <div className="smallBlueLight"></div>
            <div className="lightBlueLight"></div>

            <div className="container">
                <Header></Header>
                <div className="row align-items-center mt-5">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center d-md-block justify-content-md-start"> 
                        <h1 className="pr-2 pr-md-0">Florence</h1>
                        <h1> agency</h1>
                        </div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever
                         since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.</p>
                        <button href="#pricing" className="customButton">See Pricing</button>
                    </div>
                    <div className="col-md-6 pt-5 pt-md-0">
                        <img className="img-fluid" src={bannerImage} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;