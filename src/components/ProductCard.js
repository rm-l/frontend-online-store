import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <>
        <Link to={ `ProductDetails/${id}` } data-testid="product-detail-link">
          <ul data-testid="product">
            <li>{ title }</li>
            <li>{ price }</li>
            <img
              src={ thumbnail }
              alt={ title }
            />
          </ul>
        </Link>
        <button
          id={ title }
          data-testid="product-add-to-cart"
          type="button"
          onClick={ onClick }
        >
          Adicionar ao carrinho
        </button>
      </>
    );
  }
}

ProductCard.propTypes = {
  title: PropType.string,
  price: PropType.number,
  thumbnail: PropType.string,
  onClick: PropType.func,
  id: PropType.string,
}.isRequired;

export default ProductCard;
