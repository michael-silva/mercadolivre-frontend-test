import React, { Component } from "react";
import axios from 'axios';
import ProductList from "../components/ProductList";

class ProductListContainer extends Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  componentDidMount() {
    axios.get(`/api/items?q=ipod`)
      .then(res => {
        const products = res.data.items;
        this.setState({ products });
      })
  }

  render() {
    const { products } = this.state;
    return <ProductList products={products}></ProductList>
  }
}

export default ProductListContainer;
