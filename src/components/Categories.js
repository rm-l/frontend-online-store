import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { value, id } = this.props;
    return (
      <label htmlFor="category" data-testid="category">
        <input
          id={ id }
          value={ value }
          type="radio"
          name="category"
        />
        { value }
      </label>
    );
  }
}

Categories.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Categories;
