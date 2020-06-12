import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Product.css';

function Product(props) {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const ops = [];

    //Getting clicked on product from inventory
    useEffect(() => {
        setProduct(props.getProd(props.match.params.id))
    }, [])

    //Getting quantity options for select tag
    for(let i = 1; i <= product.stock; i++) {
        ops.push(<option key={i} value={i}>{i}</option>)
    }

    //AddToCart adds quantity key value pair for tracking in cart array using temp array to spread product array then resets the value for the drop down once an item has been added to the cart
    const addToCart = () => {
        let temp = {...product};
        temp.quantity = parseInt(quantity);
        props.updateCart(temp);
        setQuantity(1);
    }

    const back = () => {
        props.history.push('/products');
    }

    //Public_url used to grab images from Public folder
    return (
        <div className="productContainer">
                <img src={`%PUBLIC_URL%/${product.image}`} alt={product.name} />
            <div className="productInfo">
                <div>
                    <h1>{product.name}</h1>
                    <p>${product.price}</p>
                    <p>Quantity in Stock: {product.stock}</p>
                    <p>Category: {product.category}</p>
                    <p>Serial Number: {product.serno}</p>
                    <p>Manufacturer: {product.manufacturer}</p>
                </div>
                <div>
                    <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                        {ops}
                    </select>
                    <button onClick={addToCart} disabled={product.stock > 0 && product.stock >= parseInt(quantity) ? false : true}>{product.stock > 0 && product.stock >= parseInt(quantity) ? 'Add to Cart' : 'Out of Stock!'}</button>
                    <button onClick={back}>Keep Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Product);