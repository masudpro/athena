import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="priceSec text-center">
            <div className="container">
            <h1 className="customHeading">Choose Your Dedicated Team</h1>
                <div className="row mt-5 pt-4">
                    <div className="col-md-4 mb-4">
                        <div className="singlePrice">
                            <h1>$199</h1>
                            <h6>For Basic</h6>
                            <div className="priceBorder"></div>
                            <ul>
                                <li>Homepage</li>
                                <li>No Inner Page</li>
                                <li>Asset file</li>
                                <li>Source file</li>
                                <li>Free Stock Photos</li>
                                <li>10 Days Free Support</li>
                                <li>24/7 Support</li>
                            </ul>
                            <button className="customButton">Contact us</button>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="singlePrice">
                            <h1>$399</h1>
                            <h6>For Preferred</h6>
                            <div className="priceBorder"></div>
                            <ul>
                                <li>Homepage</li>
                                <li>4 Inner Pages</li>
                                <li>Asset file</li>
                                <li>Source file</li>
                                <li>Free Stock Photos</li>
                                <li>10 Days Free Support</li>
                                <li>24/7 Support</li>
                            </ul>
                            <button className="customButton">Contact us</button>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="singlePrice">
                            <h1>$599</h1>
                            <h6>For Elite</h6>
                            <div className="priceBorder"></div>
                            <ul>
                                <li>Homepage</li>
                                <li>8 Inner Pages</li>
                                <li>Asset file</li>
                                <li>Source file</li>
                                <li>Free Stock Photos</li>
                                <li>10 Days Free Support</li>
                                <li>24/7 Support</li>
                            </ul>
                            <button className="customButton">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Pricing;