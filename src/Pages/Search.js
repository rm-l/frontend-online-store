import React from 'react';
import { getCategories } from '../services/api';
import Categories from '../components/Categories';

class Search extends React.Component {
  state = {
    search: '',
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleChange = (event) => {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(
      { [name]: value },
    );
  };

  render() {
    const { search, categories } = this.state;
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
        {/* Requisito 04 */}
        <span>
          {categories.map((category) => (
            <Categories
              key={ category.id }
              value={ category.name }
              id={ category.id }
            />))}
        </span>
        {/* Requisito 04 */}
      </>
    );
  }
}

export default Search;
