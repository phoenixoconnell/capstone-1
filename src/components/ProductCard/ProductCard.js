import React from 'react';
import './ProductCard.css';

//Public_url used to grab images from Public folder
//Ternary is used to determine if low stock notification should be displayed
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