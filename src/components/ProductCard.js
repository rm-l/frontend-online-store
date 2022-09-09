import React from 'react';
import PropType from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, onClick } = this.props;
    return (
      <ul data-testid="product">
        <li>{ title }</li>
        <li>{ price }</li>
        <img
          src={ thumbnail }
          alt={ title }
        />
        <button
          id={ title }
          data-testid="product-add-to-cart"
          type="button"
          onClick={ onClick }
        >
          Adicionar ao carrinho
        </button>
      </ul>
    );
  }
}

ProductCard.propTypes = {
  title: PropType.string,
  price: PropType.number,
  thumbnail: PropType.string,
  onClick: PropType.func,
}.isRequired;

export default ProductCard;
