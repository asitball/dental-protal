import React from 'react';
import Headermain from '../../Headermain/Headermain';
import Navbar from '../../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <Headermain></Headermain>
        </div>
    );
};

export default Header;