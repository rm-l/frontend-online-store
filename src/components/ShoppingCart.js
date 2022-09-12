import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    products: [],
    renderProducts: [],
  };

  // Lógica ajustada com auxilio do seguinte link:
  // https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
  componentDidMount() {
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
  }

  render() {
    const { products, renderProducts } = this.state;
    return (
      <div>
        {products.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : renderProducts.map((p) => (
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
