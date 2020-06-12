import React, { useState, useEffect } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import store from './resource/inventory.json';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [inventory, setInventory] = useState(store);
  const [search, setSearch] = useState("");

  //Updates cart count when an item is added to the cart
  useEffect(() => {
    setCartCount(cart.reduce((t, v) => t + v.quantity, 0));
  }, [cart])

  // useEffect(() => {
  //   console.log(cart, inventory);
  // }, [cart, inventory])

  useEffect(() => {
    console.log(cartCount)
  }, [cartCount])

  //Gets product from inventory based on id and sends to Product component
  const getProd = id => {
    return inventory.filter(v => v.id == id)[0];
  }

  //Updates cart based on user input
  //Adds an item to the cart if it is not already in the cart
  //If an item is in the cart, updates quantity of the item
  //If passed in quantity is negative, removes the item from the cart
  const updateCart = item => {
    let cartIndex = cart.findIndex(v => v.id == item.id);
    let invIndex = inventory.findIndex(v => v.id == item.id);
    let tempInv = [...inventory];

    if(cartIndex != -1) {
      //Need to reset the stock in inventory here
      let tempCart = [...cart];
      if(item.quantity < 0) {
        tempCart.splice(cartIndex, 1);
        setCart([...tempCart]);
      } else {
        let prod = tempInv[invIndex];
        prod.stock -= item.quantity;
        tempInv.splice(invIndex, 1);

        tempCart[cartIndex].quantity += item.quantity;
        setCart(tempCart);
        setInventory([...tempInv, prod]);
      }
    } else {
      let prod = tempInv[invIndex];
      prod.stock -= item.quantity;
      tempInv.splice(invIndex, 1);

      setCart([...cart, item]);
      setInventory([...tempInv, prod]);
    }
  }

  //Empties the cart on checkout
  const clearCart = () => {
    setCart([]);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount}  />
        <Route exact path='/' render={() => <Landing />} />
        <Route path='/products' render={() => <Products search={search} inventory={inventory} updateSearch={updateSearch} search={search} />} />
        <Route path='/product/:id' render={() => <Product getProd={getProd} updateCart={updateCart} />} />
        <Route path='/cart' render={() => <Cart cart={cart} updateCart={updateCart} clearCart={clearCart} />} />
      </div>
    </Router>
  );
}

export default App;
