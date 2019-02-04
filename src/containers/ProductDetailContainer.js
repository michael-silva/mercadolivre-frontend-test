import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import getProductAction from '../actions/getProductAction';
import ProductDetail from "../components/ProductDetail";

const currency_symbols = {
  'USD': '$', // US Dollar
  'EUR': '€', // Euro
  'CRC': '₡', // Costa Rican Colón
  'GBP': '£', // British Pound Sterling
  'ILS': '₪', // Israeli New Sheqel
  'INR': '₹', // Indian Rupee
  'JPY': '¥', // Japanese Yen
  'KRW': '₩', // South Korean Won
  'NGN': '₦', // Nigerian Naira
  'PHP': '₱', // Philippine Peso
  'PLN': 'zł', // Polish Zloty
  'PYG': '₲', // Paraguayan Guarani
  'THB': '฿', // Thai Baht
  'UAH': '₴', // Ukrainian Hryvnia
  'VND': '₫', // Vietnamese Dong
  'ARS': '$', // Peso Argentino
};


class ProductDetailContainer extends Component {
  constructor() {
    super();
    this.state = { product: null };
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
    product.price.amount_label = `${currency_symbols[originalProduct.price.currency]} ${originalProduct.price.amount}`;
    product.price.decimals_label = originalProduct.price.decimals;
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
