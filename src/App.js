import React, { Component } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListContainer from './containers/ProductListContainer';
import ProductDetailContainer  from './containers/ProductDetailContainer';
import BreadcrumbContainer from './containers/BreadcrumbContainer';
import SearchBarContainer from './containers/SearchBarContainer';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    //render={(props) => <UserPage {...props} />}
    return (
      <Router>
        <div className="container">
          <SearchBarContainer></SearchBarContainer>
          <div className="row row-block -bottom">
            <div className="col-sm-offset-1 col-sm-10">
              <BreadcrumbContainer></BreadcrumbContainer>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-offset-1 col-sm-10">
              <Route exact path="/" component={ProductListContainer} />
              <Route exact path="/items" component={ProductListContainer} />
              <Route path="/items/:id" component={ProductDetailContainer} />
            </div>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
