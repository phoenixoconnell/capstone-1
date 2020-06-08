import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';

function Products(props) {
    return (
        <div className="productsContainer">
            {props.inventory.filter(v => props.search == "" ? true : v.name.toLowerCase().indexOf(props.search.toLowerCase()) != -1 || v.category.toLowerCase().indexOf(props.search.toLowerCase()) != -1 || v.manufacturer.toLowerCase().indexOf(props.search.toLowerCase()) != -1 || v.serno.toLowerCase().indexOf(props.search.toLowerCase()) != -1).map(v => <Link key={v.id} to={`/product/${v.id}`}><ProductCard product={v}/></Link>)}
        </div>
    )
}

export default Products;