import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import changeQueryAction from '../actions/changeQueryAction';
import ProductList from '../components/ProductList';
import ProductListEmpty from '../components/ProductListEmpty';
import ProductsService from '../shared/ProductsService';
import LazyContainer from './LazyContainer';

export class ProductListContainer extends Component {

  navigate = (product) => {
    const { history, dispatch } = this.props;
    history.push(`/items/${product.id}`);
    dispatch(changeQueryAction(''));
  }

  render() {
    let { products, error, loading } = this.props;
    return <LazyContainer error={error} loading={loading}>
      {products.length > 0
        ? <ProductList itemClick={this.navigate} products={products}></ProductList>
        : <ProductListEmpty></ProductListEmpty>}
    </LazyContainer>;
  }
}

const mapStateToProps = state => ({
  products: state.products.items.map(ProductsService.formatProduct),
  error: state.products.error,
  loading: !!state.products.searching,
});

const component = withRouter(ProductListContainer);
export default connect(
  mapStateToProps
)(component);
