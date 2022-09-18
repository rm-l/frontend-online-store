import React from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';

class Form extends React.Component {
  state = {
    email: '',
    nota: '',
    detalhes: '',
    validacao: false,
    analise: null,
  };

  handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = (id) => {
    const { email, nota: rating, detalhes: text } = this.state;

    if (this.validation()) {
      return this.setState({ validacao: true });
    }

    const obj = { email, text, rating };
    if (localStorage.getItem(id) === null) {
      localStorage.setItem(id, JSON.stringify([]));
    }
    const reviews = JSON.parse(localStorage.getItem(id));
    localStorage.setItem(id, JSON.stringify([...reviews, obj]));
    this.setState({
      email: '',
      nota: '',
      detalhes: '',
      validacao: false,
      analise: obj,
    });
  };

  validation = () => {
    const { email, nota, detalhes } = this.state;
    if (!email.includes('@') || email === '') {
      return true;
    }
    if (nota === '') {
      return true;
    }
    if (!detalhes === '') {
      return false;
    }
  };

  render() {
    const {
      email,
      nota,
      detalhes,
      validacao,
      analise,
    } = this.state;
    const { id } = this.props;
    return (
      <form>
        <label htmlFor="email">
          E-mail:
          <input
            data-testid="product-detail-email"
            name="email"
            type="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label
          htmlFor="nota"
          value={ nota }
        >
          <input
            data-testid="1-rating"
            type="radio"
            name="nota"
            value="1"
            onChange={ this.handleChange }
          />
          01
          <input
            data-testid="2-rating"
            type="radio"
            name="nota"
            value="2"
            onChange={ this.handleChange }
          />
          02
          <input
            data-testid="3-rating"
            type="radio"
            name="nota"
            value="3"
            onChange={ this.handleChange }
          />
          03
          <input
            data-testid="4-rating"
            type="radio"
            name="nota"
            value="4"
            onChange={ this.handleChange }
          />
          04
          <input
            data-testid="5-rating"
            type="radio"
            name="nota"
            value="5"
            onChange={ this.handleChange }
          />
          05
        </label>
        <label htmlFor="detalhes">
          <textarea
            data-testid="product-detail-evaluation"
            name="detalhes"
            value={ detalhes }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="submit-review-btn"
          type="button"
          onClick={ () => this.handleClick(id) }
        >
          Enviar
        </button>
        { validacao && <h3 data-testid="error-msg">Campos inválidos</h3>}
        {analise && <ReviewCard
          email={ analise.email }
          text={ analise.text }
          rating={ analise.rating }
        />}
      </form>
    );
  }
}

Form.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Form;
