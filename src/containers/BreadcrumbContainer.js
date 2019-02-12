import React, { Component } from "react";
import { connect } from "react-redux";
import getCategoryAction from '../actions/getCategoryAction';
import Breadcrumb from "../components/Breadcrumb";

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
    const { path } = this.props;
    return path.length > 0 ? <Breadcrumb path={path}></Breadcrumb> : <></>;
  }
}

const mapStateToProps = state => ({
  category: state.products.categories[0],
  path: state.breadcrumb.path,
});


export default connect(
  mapStateToProps
)(BreadcrumbContainer);

