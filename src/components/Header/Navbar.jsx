import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  
    return (
        <ul>
            <li >
                <Link to='/display' style={{ color: 'black', textDecoration: 'none' }}>Note list</Link>
            </li>
        </ul>
    )
};

export default NavBar;