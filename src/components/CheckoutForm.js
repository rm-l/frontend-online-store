import React from 'react';
import { Redirect } from 'react-router-dom';

class CheckoutForm extends React.Component {
  state = {
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    payment: '',
    error: false,
    redirect: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.verifyInputs());
  };

  verifyInputs = () => {
    const { fullname, email, cpf, phone, cep, address, payment } = this.state;
    return fullname && email && cpf && phone && cep && address && payment;
  };

  handleClick = () => {
    if (this.verifyInputs()) {
      this.setState({ redirect: true });
      localStorage.removeItem('cartItems');
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { error, redirect } = this.state;
    return (
      <form>
        <label htmlFor="fullname">
          Nome completo:
          <input
            data-testid="checkout-fullname"
            type="text"
            name="fullname"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            data-testid="checkout-email"
            type="email"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            data-testid="checkout-cpf"
            type="text"
            name="cpf"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            data-testid="checkout-phone"
            type="text"
            name="phone"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cep">
          CEP:
          <input
            data-testid="checkout-cep"
            type="text"
            name="cep"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="address">
          CEP:
          <input
            data-testid="checkout-address"
            type="text"
            name="address"
            onChange={ this.handleChange }
          />
        </label>
        <label
          htmlFor="payment"
          onChange={ this.handleChange }
        >
          Forma de pagamento:
          <input
            data-testid="ticket-payment"
            type="radio"
            name="payment"
          />
          Boleto
          <input
            data-testid="visa-payment"
            type="radio"
            name="payment"
          />
          Visa
          <input
            data-testid="master-payment"
            type="radio"
            name="payment"
          />
          Master
          <input
            data-testid="elo-payment"
            type="radio"
            name="payment"
          />
          Elo
        </label>
        <button
          data-testid="checkout-btn"
          type="button"
          onClick={ this.handleClick }
        >
          Finalizar compra
        </button>
        { error && <h3 data-testid="error-msg">Campos inválidos</h3>}
        { redirect && <Redirect to="/" />}
      </form>
    );
  }
}

export default CheckoutForm;
