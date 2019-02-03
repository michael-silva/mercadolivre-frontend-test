import React, { Component } from "react";
import axios from 'axios';
import ProductDetail from "../components/ProductDetail";

class ProductDetailContainer extends Component {
  constructor() {
    super();
    this.state = { product: { price: {} } };
  }

  componentDidMount() {
    axios.get(`/api/items/MLA693874901`)
      .then(res => {
        const product = res.data.item;
        this.setState({ product });
      })
  }

  render() {
    const { product } = this.state;
    return <ProductDetail product={product}></ProductDetail>
  }
}

export default ProductDetailContainer;
