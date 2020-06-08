import React from 'react';
import './Search.css';

function Search(props) {

    return (
        <div className="searchContainer">
            <input placeholder="Enter search criteria here" value={props.search} onChange={props.updateSearch} />
        </div>
    )
}

export default Search;