import React from 'react'
import Search from '../Search/Search';
import Nav from '../Nav/Nav';

function Header(props) {
    return (
        <div>
            <span>Stay Weird</span>
            <Search search={props.search} updateSearch={props.updateSearch} />
            <Nav cartCount={props.cartCount} />
        </div>
    )
}

export default Header;