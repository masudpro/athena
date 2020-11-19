import React from 'react';
import footerLogo from '../image/logo.png';
import facebook from '../image/facebook.png';
import twitter from '../image/twitter.png';
import linkedin from '../image/linkedin.png';
import dribble from '../image/dribble.png';
import behance from '../image/behance.png';


const Footer = () => {
    return (
        <footer className="footer py-5">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="">
                            <img className="footerLogo" src={footerLogo} alt=""/>
                            <div className="footerSocial">
                                <ul className="m-0 p-0 d-flex">
                                    <li><a href="#"> <img  src={facebook}  alt=""/> </a></li>
                                    <li><a href="#"> <img  src={twitter}  alt=""/> </a></li>
                                    <li><a href="#"> <img  src={linkedin}  alt=""/> </a></li>
                                    <li><a href="#"> <img  src={dribble}  alt=""/> </a></li>
                                    <li><a href="#"> <img  src={behance}  alt=""/> </a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Enterprise</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;