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
    setCartCount(cart.length)
  }, [cart])

  const getProd = id => {
    return inventory.filter(v => v.id == id)[0];
  }

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} updateSearch={setSearch} />
        <Route exact path='/' render={() => <Products search={search} inventory={inventory} />} />
        <Route path='/product/:id' render={() => <Product getProd={getProd} updateCart={setCart} />} />
        <Route path='/cart' render={() => <Cart cart={cart} updateCart={setCart} />} />
      </div>
    </Router>
  );
}

export default App;
