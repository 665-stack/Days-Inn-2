import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <header className='flex justify-center md:justify-between items-center	 bg-neutral-900 sm:px-12 md:px-20 px-2 py-5'>
            <Link className='uppercase text-slate-50 text-xl hidden md:block' to='/'>Days Inn</Link>
            <nav className='flex  text-slate-50 hover:text-slate-200 text-lg'>

                <Link className='mr-2 sm:mr-6' to='/'>Home</Link>

                <Link className='mr-2 sm:mr-6 hidden sm:block' to='/about-us'>About Us</Link>

                <Link className='mr-2 sm:mr-6' to='/rooms'>Rooms</Link>

                <Link className='mr-2 sm:mr-6 hidden sm:block' to='/contact'>Contact</Link>

                <Link className='mr-2 sm:mr-6' to='/login'>Login</Link>

                <Link className='mr-2 sm:mr-6' to='/register'>Register</Link>
            </nav>
        </header>
    );
};

export default Header;