import React from 'react'
import {Link} from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart({props.cartCount})</Link>
        </div>
    )
}

export default Nav;