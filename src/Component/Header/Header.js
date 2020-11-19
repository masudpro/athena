import React from 'react';
import hederLogo from '../image/logo.png';
import menu from '../image/menu.png';
import '../../App.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg topNav">
                <a class="navbar-brand" href="#"><img style={{width: '100px' }} src={hederLogo} alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><img src={menu} alt=""/></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link customButton"  href="#">Contact Us</a>
                    </li>
                    
                    </ul>
                </div>
                </nav>
            
        </div>
    );
};

export default Header;