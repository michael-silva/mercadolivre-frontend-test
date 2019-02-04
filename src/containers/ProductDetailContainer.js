import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import getProductAction from '../actions/getProductAction';
import ProductDetail from "../components/ProductDetail";
import CurrencyService from '../shared/CurrencyService';

export class ProductDetailContainer extends Component {
  constructor() {
    super();
    this.state = { product: null };
    this.currencyService = new CurrencyService();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getProductAction(id));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { product } = this.props;
    if (prevProps.product !== product) {
      this.setState({ product: this.formatProduct(product) })
    }
  }

  formatProduct(originalProduct) {
    const product = { ...originalProduct };
    product.price.amount_label = `${this.currencyService.getSymbol(originalProduct.price.currency)} ${originalProduct.price.amount}`;
    const decimalsString = originalProduct.price.decimals.toString();
    product.price.decimals_label = decimalsString.length === 1 ? `${decimalsString}0` : decimalsString;
    product.condition_label = originalProduct.condition === 'new' ? 'Nuevo' : 'Usado';
    product.description = originalProduct.description.replace(/\n/gm, '<br />');
    return product;
  }

  render() {
    const { product } = this.state;
    return product ? <ProductDetail product={product}></ProductDetail> : <></>;
  }
}

const mapStateToProps = state => ({
  product: state.products.items[0],
});


export default connect(
  mapStateToProps
)(withRouter(ProductDetailContainer));
