import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import Search from '../Search/Search';
import './Products.css';

//Search term filters inventory
//Ternary returns all products from filter if search string is empty
//Otherwise ternary applies filter using search string to all searchable categories of data
//Map is chained to the end of the filter to display search results or all products
function Products(props) {
    return (
        <>
            <Search search={props.search} updateSearch={props.updateSearch} />
            <div className="productsContainer">
                {props.inventory.filter(v => props.search == "" ? true : v.name.toLowerCase().indexOf(props.search.toLowerCase()) != -1 || v.category.toLowerCase().indexOf(props.search.toLowerCase()) != -1 || v.manufacturer.toLowerCase().indexOf(props.search.toLowerCase()) != -1 || v.serno.toLowerCase().indexOf(props.search.toLowerCase()) != -1).map(v => <Link key={v.id} to={`/product/${v.id}`}><ProductCard product={v}/></Link>)}
            </div>
        </>
    )
}

export default Products;