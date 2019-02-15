import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import getProductAction from '../actions/getProductAction';
import ProductDetail from '../components/ProductDetail';
import ProductsService from '../shared/ProductsService';
import ServerSideComponent from '../shared/ServerSideComponent';
import LazyContainer from './LazyContainer';

export class ProductDetailContainer extends ServerSideComponent {
  componentDidMount() {
    this.fetchInitialData();
  }

  fetchInitialData() {
    const { id } = this.props.match.params;
    return this.props.dispatch(getProductAction(id));
  }

  render() {
    const { product, error, loading } = this.props;
    return <LazyContainer error={error} loading={loading}>
      {product ? <ProductDetail product={product}></ProductDetail> : <></>}
    </LazyContainer>;
  }
}

const mapStateToProps = state => ({
  product: ProductsService.formatProduct(state.products.items[0]),
  error: state.products.error,
  loading: !!state.products.fetching,
});

const component = withRouter(ProductDetailContainer);
export default connect(
  mapStateToProps
)(component);
