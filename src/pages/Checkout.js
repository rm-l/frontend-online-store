import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

class Checkout extends React.Component {
  state = {
    products: [],
    renderProducts: [],
  };

  componentDidMount() {
    this.limitProducts();
  }

  limitProducts = () => {
    const products = JSON.parse(localStorage.getItem('cartItems'));
    if (products !== null) {
      const result = [];
      products.forEach((element) => {
        result.push(JSON.stringify(element));
      });
      const final = result.filter((r, i) => result.indexOf(r) === i);
      const finalResult = [];
      final.forEach((element) => {
        finalResult.push(JSON.parse(element));
      });
      this.setState({ products, renderProducts: finalResult });
    }
  };

  render() {
    const { products, renderProducts } = this.state;
    return (
      <>
        {renderProducts.map((element) => (
          <div key={ element.id }>
            <h4>{element.title}</h4>
            <p>{products.filter((e) => e.id === element.id).length}</p>
            <p>{element.price}</p>
          </div>
        ))}
        <CheckoutForm />
      </>
    );
  }
}

export default Checkout;
