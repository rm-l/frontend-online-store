import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Search } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route path="/ProductDetails/:id" component={ ProductDetails } />
        <Route path="/Checkout" component={ Checkout } />
      </BrowserRouter>
    );
  }
}

export default App;
