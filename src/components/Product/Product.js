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
    for(let i = 1; i <= 10; i++) {
        ops.push(<option key={i} value={i}>{i}</option>)
    }

    //AddToCart adds quantity key value pair for tracking in cart array
    const addToCart = () => {
        let temp = {...product};
        temp.quantity = quantity;
        console.log(quantity, temp);
        props.updateCart(temp);
    }

    const back = () => {
        props.history.push('/products');
    }

    //Public_url used to grab images from Public folder
    return (
        <div className="productContainer">
            <div>
                <img src={`%PUBLIC_URL%/${product.image}`} alt={product.name} />
            </div>
            <div className="productInfo">
                <div>
                    <h1>{product.name}</h1>
                    <h2>${product.price}</h2>
                    <h2>Quantity in Stock: {product.stock}</h2>
                    <h2>Category: {product.category}</h2>
                    <h2>Serial Number: {product.serno}</h2>
                    <h2>Manufacturer: {product.manufacturer}</h2>
                </div>
                <div>
                    <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                        {ops}
                    </select>
                    <button onClick={addToCart}>Add to Cart</button>
                    <button onClick={back}>Keep Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Product);