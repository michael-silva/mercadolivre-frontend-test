import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import getProductAction from '../actions/getProductAction';
import ProductDetail from "../components/ProductDetail";
import ProductsService from '../shared/ProductsService';
import ServerSideComponent from '../shared/ServerSideComponent';

export class ProductDetailContainer extends ServerSideComponent {
  componentDidMount() {
    this.fetchInitialData();
  }

  fetchInitialData() {
    const { id } = this.props.match.params;
    return this.props.dispatch(getProductAction(id));
  }

  render() {
    const { product } = this.props;
    return product ? <ProductDetail product={product}></ProductDetail> : <></>;
  }
}

const mapStateToProps = state => ({
  product: ProductsService.formatProduct(state.products.items[0]),
});


export default connect(
  mapStateToProps
)(withRouter(ProductDetailContainer));
