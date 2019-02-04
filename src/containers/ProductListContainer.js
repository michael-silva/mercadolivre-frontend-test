import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import changeQueryAction from '../actions/changeQueryAction';
import ProductList from "../components/ProductList";
import CurrencyService from '../shared/CurrencyService';

export class ProductListContainer extends Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.currencyService = new CurrencyService();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { products } = this.props;
    if (prevProps.products !== products) {
      this.setState({ products: products.map(this.formatProduct.bind(this)) })
    }
  }

  formatProduct(originalProduct) {
    const product = { ...originalProduct };
    product.price.amount_label = `${this.currencyService.getSymbol(originalProduct.price.currency)} ${originalProduct.price.amount}`;
    const decimalsString = originalProduct.price.decimals.toString();
    product.price.decimals_label = decimalsString.length === 1 ? `${decimalsString}0` : decimalsString;
    return product;
  }

  navigate(product) {
    const { history, dispatch } = this.props;
    history.push(`/items/${product.id}`);
    dispatch(changeQueryAction(''));
  }

  render() {
    let { products } = this.state;
    return products.length > 0 
      ? <ProductList itemClick={this.navigate.bind(this)} products={products}></ProductList> 
      : <></>;
  }
}

const mapStateToProps = state => ({
  products: state.products.items
})


export default connect(
  mapStateToProps
)(withRouter(ProductListContainer));
