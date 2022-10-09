import React from 'react';
import header from '../../images/header.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={header} alt="" />
            <nav>
                <a href="/player">Players</a>
                <a href="/review">Selection Review</a>
                <a href="/manage">Manage Players</a>
            </nav>
        </div>
    );
};

export default Header;