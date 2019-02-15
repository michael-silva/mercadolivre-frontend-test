import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCategoryAction from '../actions/getCategoryAction';
import Breadcrumb from '../components/Breadcrumb';

export class BreadcrumbContainer extends Component {
  componentDidMount() {
    this.categoryChanged();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.category !== this.props.category) {
      this.categoryChanged();
    }
  }

  categoryChanged() {
    const { category, dispatch } = this.props;
    if (category) {
      dispatch(getCategoryAction(category));
    }
  }

  render() {
    const { path, loading } = this.props;
    return <Breadcrumb loading={loading} path={path}></Breadcrumb>;
  }
}

const mapStateToProps = state => ({
  category: state.products.categories[0],
  path: state.breadcrumb.path,
  loading: !!state.products.fetching || !!state.products.searching || !!state.breadcrumb.fetching
});


export default connect(
  mapStateToProps
)(BreadcrumbContainer);

