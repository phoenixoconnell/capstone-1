import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
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
    
    const grandTotal = props.cart.reduce((t, v) => t + (v.price * v.quantity), 0)

    const onToken = token => {
        props.clearCart()
        console.log(token)
        // dispatch(purchaseMade(cart))
        // dispatch(emptyCart()); 
        // toast.success("Thanks for purchasing from somerton.com", {
        //    closeButton: false,
        //    transition: Zoom,
        //    className: 'cart-toastify',
        //    position: "top-center",
        //    autoClose: 2000,
        // })
     }

    //Grand Total of cart is calculated with an array reduce method that tallies the price and quantity of each line item and adds them together
    return (
        <div className="cartContainer">
            {props.cart.map(v => (
                <div className="cartItemContainer" key={v.id}>
                    <img src={`%PUBLIC_URL%/${v.image}`} alt={v.name} />
                    <div className="cartItemInfo">
                        <h3>{v.name}</h3>
                        <span>${v.price}</span>
                        <span>Quantity: {v.quantity}</span>
                        <span>Total: ${v.price * v.quantity}</span>
                        <button onClick={() => remove(v)}>Remove from Cart</button>
                    </div>
                </div>
            ))}
            <div className="checkoutContainer">
                <div className="stripeButton">
                    {/* <h1>Cart Total: ${props.cart.reduce((t, v) => t + (v.price * v.quantity), 0)}</h1> */}
                    {/* <button onClick={checkout}>Checkout</button> */}
                    <StripeCheckout name='Stay Weird' description='making a payment' 
                    stripeKey='pk_test_Syf0NZeZFNpsmNmcoGCC9D7500Ek6o36XW' 
                    token={onToken} 
                    //    image={logo}
                    amount={grandTotal*100} panelLabel="Submit Payment" 
                    allowRememberMe={true} billingAddress={false} zipCode={false}
                    // opened={onOpened} closed={onClosed}
                    >
                    </StripeCheckout>
                </div>
                <div>
                    <button onClick={() => props.history.push('/products')}>Keep Shopping</button>
                </div>
            </div>
        </div>
    )
}

//WithRouter included for history push to Products component
export default withRouter(Cart);