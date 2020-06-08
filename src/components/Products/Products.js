import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard'

function Products(props) {
    return (
        <div>
            {props.inventory.filter(v => props.search == "" ? true : v.name.toLowerCase().indexOf(props.search.toLowerCase()) != -1 || v.category.toLowerCase().indexOf(props.search.toLowerCase()) != -1 || v.manufacturer.toLowerCase().indexOf(props.search.toLowerCase()) != -1 || v.serno.toLowerCase().indexOf(props.search.toLowerCase()) != -1).map(v => <Link key={v.id} to={`/product/${v.id}`}><ProductCard product={v}/></Link>)}
        </div>
    )
}

export default Products;