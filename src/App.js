import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Pages/Search';
import ShoppingCart from './componets/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Search } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}

export default App;
