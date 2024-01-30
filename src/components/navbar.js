// src/components/Navbar.js
import React from 'react';
import logo from '../public/logo.jpeg';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <span>Plant Disease Detection</span>
        </nav>
    );
};

export default Navbar;
