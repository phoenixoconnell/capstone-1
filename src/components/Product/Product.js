import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

function Product(props) {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const ops = [];

    useEffect(() => {
        setProduct(props.getProd(props.match.params.id))
    }, [])

    for(let i = 1; i <= 10; i++) {
        ops.push(<option key={i} value={i}>{i}</option>)
    }

    const addToCart = () => {
        let temp = product;
        product.quantity = quantity;
        props.updateCart(temp);
    }

    const back = () => {
        props.history.push('/');
    }

    return (
        <div>
            <img src={`%PUBLIC_URL%/${product.image}`} alt={product.name} />
                <div>
                    <h1>{product.name}</h1>
                    <h2>${product.price}</h2>
                    {product.stock <= 3 ? <span>Only {product.stock} left!</span> : null}
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
    )
}

export default withRouter(Product);