import React from 'react';

function ProductCard(props) {
    return (
        <div>
            <img src={`%PUBLIC_URL%/${props.product.image}`} alt={props.product.name} />
                <div>
                    <h1>{props.product.name}</h1>
                    <h2>${props.product.price}</h2>
                    {props.product.stock <= 3 ? <span>Only {props.product.stock} left!</span> : null}
                </div>
        </div>
    )
}

export default ProductCard;