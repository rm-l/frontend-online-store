import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem('cartItems'));
    if (products !== null) {
      this.setState({ products });
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : products.map((p) => (
            <div key={ p.id }>
              <h4 data-testid="shopping-cart-product-name">{p.title}</h4>
              <h4>{p.price}</h4>
              <p data-testid="shopping-cart-product-quantity">
                {products.filter((pr) => pr.id === p.id).length}
              </p>
            </div>
          ))}
        <div>
          <p>
            Valor Total:
            {/* {totalPrice} */}
          </p>
        </div>
        <button
          type="button"
          data-testid="checkout-products"
          onClick={ this.handleClick }
          // disabled={ produtosDoCarrinho.length < 1 }
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
