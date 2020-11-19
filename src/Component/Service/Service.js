import React from 'react';
import serviceOne from '../image/Group 65@2x.png';
import serviceTwo from '../image/Group 66@2x.png';
import serviceThree from '../image/Group 69@2x.png';
import serviceFour from '../image/Group 72@2x.png';

const Service = () => {
    return (
        <section className="serviceSec text-center">
            <div className="container">
                <h1 className="customHeading">What we do</h1>
                <p>Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength. </p>
                <div className="row">
                    <div className="col-sm-6 col-md-3 singleService mb-4">
                        <div className="serviceContent">
                            <img className="mb-3" src={serviceOne} alt=""/>
                            <h1>Experience Design </h1>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 singleService mb-4">
                        <div className="serviceContent">
                            <img className="mb-3" src={serviceTwo} alt=""/>
                            <h1>Interface Design</h1>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 singleService mb-4">
                        <div className="serviceContent">
                            <img className="mb-3" src={serviceThree} alt=""/>
                            <h1>Prototyping</h1>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 singleService mb-4">
                        <div className="serviceContent">
                            <img className="mb-3" src={serviceFour} alt=""/>
                            <h1>Illustration</h1>
                            <p>The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Service;