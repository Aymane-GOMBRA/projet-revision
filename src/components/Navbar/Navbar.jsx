import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

// const Navbar = () => {
//     return (
//         <div className='navbar'>
//             <Link to='/'>Home</Link>
//             <Link to='/array'>Rectangle</Link>
//             <Link to='/users'>Users</Link>
//         </div>
//     );
// }
export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="logo">Logo</Link>
        <ul>
            <li>
                <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
                <NavLink to="/array">Rectangle</NavLink>
            </li>
            <li>
                <NavLink to="/users">Utilisateurs</NavLink>
            </li>
            <li>
                <NavLink to="/cycles">Cycle de vie</NavLink>
            </li>
            <li>
                <NavLink to="/films">Films</NavLink>
            </li>
            <li>
                <NavLink to="/lifting">Lifting State Up</NavLink>
            </li>
            <li>
                <NavLink to="/converter">Converter</NavLink>
            </li>
        </ul>
    </nav>

};
