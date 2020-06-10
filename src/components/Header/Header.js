import React from 'react';
import {withRouter} from 'react-router-dom';
import Search from '../Search/Search';
import Nav from '../Nav/Nav';
import './Header.css';
import logo from './stay_weird.png';

function Header(props) {
    return (
        props.location.pathname !== "/" ? (
        <div className="headerContainer">
            <div className="logoSpan">
                <img src={logo} alt="Stay Weird Logo" />
                <span>Welcome to Stay Weird</span>
            </div>
            <span><Search search={props.search} updateSearch={props.updateSearch} /></span>
            <span><Nav cartCount={props.cartCount} /></span>
        </div>) : null
    )
}

export default withRouter(Header);