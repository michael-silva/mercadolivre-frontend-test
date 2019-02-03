import React, { Component } from "react";
import axios from 'axios';
import Breadcrumb from "./Breadcrumb";

class BreadcrumbContainer extends Component {
  constructor() {
    super();
    this.state = { path: [] };
  }

  componentDidMount() {
    axios.get(`/api/categories/MLA32321`)
      .then(res => {
        const path = res.data.path;
        this.setState({ path });
      })
  }

  render() {
    const { path } = this.state;
    return <Breadcrumb path={path}></Breadcrumb>
  }
}

export default BreadcrumbContainer;
