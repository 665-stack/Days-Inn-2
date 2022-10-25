import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <header>
            <Link to='/'>Days Inn</Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about-us'>About Us</Link>
                <Link to='/rooms'>Rooms</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
        </header>
    );
};

export default Header;