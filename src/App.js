import React, { useState, useEffect } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import inventory from './resource/inventory.json';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [prod, setProd] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCartCount(cart.reduce((t, v) => t + v.quantity, 0));
  }, [cart])

  const getProd = id => {
    return inventory.filter(v => v.id == id)[0];
  }

  const updateCart = item => {
    let index = cart.findIndex(v => v.id == item.id);

    if(index != -1) {
      let tempCart = [...cart];
      if(item.quantity < 0) {
        tempCart.splice(index, 1);
        setCart([...tempCart]);
      } else {
        tempCart[index].quantity += item.quantity;
        setCart(tempCart);
      }
    } else {
      setCart([...cart, item]);
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} updateSearch={updateSearch} search={search} />
        <Route exact path='/' render={() => <Products search={search} inventory={inventory} />} />
        <Route path='/product/:id' render={() => <Product getProd={getProd} updateCart={updateCart} />} />
        <Route path='/cart' render={() => <Cart cart={cart} updateCart={updateCart} clearCart={clearCart} />} />
      </div>
    </Router>
  );
}

export default App;
