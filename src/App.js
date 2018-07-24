import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      products: [
        { id: 1, name: 'Titanic', genre: 'Romance' },
        { id: 2, name: 'Anchorman', genre: 'Comedy' },
        { id: 3, name: 'Oceans Eight', genre: 'Action' },
      ]
    }
  }

  handleProductSelect(product) {
    this.setState(prevState => {
      return {
        selectedProducts: prevState.selectedProducts.concat(product)
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Film Store</h1>
        <p>You have selected {this.state.selectedProducts.length} product(s).</p>
        <ProductList
          products={this.state.products}
          onProductSelect={this.handleProductSelect.bind(this)}
        />
      </div>
    );
  }
}
export default App;