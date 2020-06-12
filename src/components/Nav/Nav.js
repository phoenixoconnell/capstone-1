import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav(props) {
    return (
        <div className="navContainer">
            <span className="homeLink"><Link to='/products'>Home</Link></span>
            <span className="cartLink"><Link to='/cart'><i className="fas fa-shopping-cart"></i>({props.cartCount.toString()})</Link></span>
        </div>
    )
}

export default Nav;