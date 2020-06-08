import React from 'react';
import Search from '../Search/Search';
import Nav from '../Nav/Nav';
import './Header.css';

function Header(props) {
    return (
        <div className="headerContainer">
            <img src="stay_weird.png" alt="Stay Weird Logo" />
            <span>Welcome to Stay Weird</span>
            <span><Search search={props.search} updateSearch={props.updateSearch} /></span>
            <span><Nav cartCount={props.cartCount} /></span>
        </div>
    )
}

export default Header;