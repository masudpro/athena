import React from 'react';
import Achievement from '../Achievement/Achievement';
import Pricing from '../Pricing/Pricing';
import Project from '../Project/Project';
import Service from '../Service/Service';
import Subscribe from '../Subscribe/Subscribe';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            
      <Service></Service>
      <Project></Project>
      <Achievement></Achievement>
      <Pricing></Pricing>
      <Subscribe></Subscribe>
        </div>
    );
};

export default AboutUs;