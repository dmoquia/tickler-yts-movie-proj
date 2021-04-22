import React from 'react';
import {Link} from 'react-router-dom';
import tick from '../tick.svg'
export default function Navbar() {
    return <nav className="navbar">
            <img src={tick} alt="tick" height="70%"/>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
            </ul>
    </nav>;
}
