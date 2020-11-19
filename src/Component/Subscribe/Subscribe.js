import React from 'react';

const Subscribe = () => {
    return (
        <section className="subscribeSec text-center pb-5">
            <div className="container">
            <h1 className="customHeading">Get your design right, right now</h1>
            <h6>Be the first know our latest offers and updates!</h6>
                <div className="row justify-content-center mt-5 pt-2">
                    <div className="col-sm-10 col-md-8 col-lg-6">
                        <div className="subscribeContent d-flex">
                            <input type="text" placeholder="Enter Your Email Address"/>
                            <button>Get Started</button>
                        </div>

                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Subscribe;