import React from 'react';
import PropTypes from 'prop-types';

class ReviewCard extends React.Component {
  render() {
    const { email, text, rating } = this.props;
    return (
      <div>
        <h3 data-testid="review-card-email">{`${email}`}</h3>
        <p data-testid="review-card-evaluation">{`${text}`}</p>
        <h3 data-testid="review-card-rating">{`${rating}`}</h3>
      </div>
    );
  }
}

ReviewCard.propTypes = {
  email: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default ReviewCard;
