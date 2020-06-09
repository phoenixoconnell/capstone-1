import React from 'react';
import './ProductCard.css';

function ProductCard(props) {
    return (
        <div className="cardContainer">
            <img src={`%PUBLIC_URL%/${props.product.image}`} alt={props.product.name} />
                <div>
                    <h2>{props.product.name}</h2>
                    <h2>${props.product.price}</h2>
                    {props.product.stock <= 3 ? <span>Only {props.product.stock} left!</span> : null}
                </div>
        </div>
    )
}

export default ProductCard;