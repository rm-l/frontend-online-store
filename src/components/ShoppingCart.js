import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <div>
          <p>
            Valor Total:
            {' '}
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
