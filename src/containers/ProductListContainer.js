import React, { Component } from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import changeQueryAction from '../actions/changeQueryAction';
import ProductList from "../components/ProductList";
import ProductsService from '../shared/ProductsService';

export class ProductListContainer extends Component {

  navigate(product) {
    const { history, dispatch } = this.props;
    history.push(`/items/${product.id}`);
    dispatch(changeQueryAction(''));
  }

  render() {
    let { products } = this.props;
    return products.length > 0 
      ? <ProductList itemClick={this.navigate.bind(this)} products={products}></ProductList> 
      : <></>;
  }
}

const mapStateToProps = state => ({
  products: state.products.items.map(ProductsService.formatProduct)
});

export default connect(
  mapStateToProps
)(withRouter(ProductListContainer));
