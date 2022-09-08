import React from 'react';
import Botao from '../components/Botao';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';

class Search extends React.Component {
  state = {
    btn: [],
    search: '',
    categories: [],
    products: [],
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

  handleClick = async () => {
    const { search, categories } = this.state;
    const categoryId = categories.find((c) => c.name === search);
    if (categoryId) {
      const products = await getProductsFromCategoryAndQuery(categoryId.id, undefined);
      this.setState({ products: products.results });
    } else {
      const products = await getProductsFromCategoryAndQuery(undefined, search);
      this.setState({ products: products.results });
      console.log(await products.results[0]);
    }
  };

  render() {
    const { search, btn } = this.state;
    const { categories, products } = this.state;
    return (
      <>
        <Botao produtosDoCarrinho={ btn } />
        <label htmlFor="search">
          <input
            data-testid="query-input"
            id="search"
            name="search"
            onChange={ this.handleChange }
            value={ search }
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
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
        {products.length === 0 ? <h2>Nenhum produto foi encontrado</h2>
          : products.map((p) => (
            <ProductCard
              key={ p.id }
              title={ p.title }
              price={ p.price }
              thumbnail={ p.thumbnail }
            />))}
      </>
    );
  }
}

export default Search;