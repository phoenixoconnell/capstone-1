import React from 'react'

function Search(props) {

    return (
        <div>
            <input value={props.search} onChange={props.updateSearch} />
        </div>
    )
}

export default Search;