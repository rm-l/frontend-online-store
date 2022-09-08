import React from 'react';
import PropType from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <ul data-testid="product">
        <li>{ title }</li>
        <li>{ price }</li>
        <img
          src={ thumbnail }
          alt={ title }
        />
      </ul>
    );
  }
}

ProductCard.propTypes = {
  title: PropType.string,
  price: PropType.number,
  thumbnail: PropType.string,
}.isRequired;

export default ProductCard;
