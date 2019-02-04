import React, { Component } from "react";
import { connect } from "react-redux";
import getCategoryAction from '../actions/getCategoryAction'
import Breadcrumb from "../components/Breadcrumb";

class BreadcrumbContainer extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { category, dispatch } = this.props;
    if (prevProps.category !== category) {
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

