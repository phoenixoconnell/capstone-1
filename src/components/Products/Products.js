//Import inventory.json

//Search entries will limit product visibility
//Map over inventory variable to display inventory cards

//Each inventory card will contain thumbnail, name, price, low stock warning

//Clicking each card takes user to individual product page

import React from 'react';
import ProductCard from '../ProductCard/ProductCard'
import inventory from '../../resource/inventory.json';

function Products(props) {
    return (
        <div>
            {inventory.filter(v => props.search == "" ? true : props.search == v.name || props.search == v.category || props.search == v.manufacturer || props.search == v.serno).map(v => <ProductCard product={v}/>)}
        </div>
    )
}

export default Products;