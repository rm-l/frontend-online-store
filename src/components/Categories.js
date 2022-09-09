import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { value, id, onClick } = this.props;
    return (
      <label htmlFor={ id } data-testid="category">
        <input
          id={ id }
          value={ value }
          type="radio"
          name="category"
          onChange={ onClick }
        />
        { value }
      </label>
    );
  }
}

Categories.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categories;
