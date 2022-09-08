import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
  };

  handleChange = (event) => {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(
      { [name]: value },
    );
  };

  render() {
    const { search } = this.state;
    return (
      <>
        <label htmlFor="search">
          <input
            id="search"
            name="search"
            onChange={ this.handleChange }
            value={ search }
          />
        </label>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </>
    );
  }
}

export default Search;
