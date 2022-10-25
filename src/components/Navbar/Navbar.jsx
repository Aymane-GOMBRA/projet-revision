import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/array'>Rectangle</Link>
            <Link to='/users'>Users</Link>
        </div>
    );
}

export default Navbar;