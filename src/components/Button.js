import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { produtosDoCarrinho } = this.props;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          carrinho
        </Link>
        <span data-testid="shopping-cart-size">{ produtosDoCarrinho.length }</span>
      </div>
    );
  }
}

Button.propTypes = {
  produtosDoCarrinho: PropTypes.array,
}.isRequired;

export default Button;
