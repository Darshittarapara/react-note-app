import React from 'react';
import NavBar from './Navbar';
import SearchInput from './SearchList';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>

                <Link to='/' style={{color:'black' ,textDecoration:'none'}}>
                    <h1>Magic Notes</h1>
                </Link>
                <nav>
                    <NavBar />
                </nav>
            </div>

            <div className='search-control'>
                <SearchInput />
            </div>
        </div>
    )
};

export default Header