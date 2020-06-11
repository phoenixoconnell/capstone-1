import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Cart.css';

function Cart(props) {

    const checkout = () => {
        if(props.cart.length <= 0) {
            alert('Please add an item to your cart!')
        } else {
            alert('Thanks for choosing Stay Weird!\nYour order is confirmed!');
            props.clearCart();
        }
        props.history.push('/products');
    }

    //Passes stub product object with id of item to be removed and negative item quantity to indicate removal
    const remove = item => {
        let temp = {
            id: item.id,
            quantity: -(item.quantity)
        }

        props.updateCart(temp)
    } 

    //Grand Total of cart is calculated with an array reduce method that tallies the price and quantity of each line item and adds them together
    return (
        <div id="cart">
            {props.cart.map(v => (
                <div key={v.id}>
                    <img src={`%PUBLIC_URL%/${v.image}`} alt={v.name} />
                    <h3>{v.name}</h3>
                    <span>${v.price}</span>
                    <span>Quantity: {v.quantity}</span>
                    <span>Total: ${v.price * v.quantity}</span>
                    <button onClick={() => remove(v)}>Remove from Cart</button>
                </div>
            ))}
            <h1>Cart Total: ${props.cart.reduce((t, v) => t + (v.price * v.quantity), 0)}</h1>
            <button onClick={checkout}>Checkout</button>
            <button onClick={() => props.history.push('/products')}>Keep Shopping</button>
        </div>
    )
}

//WithRouter included for history push to Products component
export default withRouter(Cart);