import React, { Component } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import ProductListContainer from './containers/ProductListContainer';
import ProductDetailContainer  from './containers/ProductDetailContainer';
import BreadcrumbContainer from './containers/BreadcrumbContainer';


class App extends Component {
  constructor() {
    super();
    this.state = { term: '' };
  }
  render() {
    const { term } = this.state;
    //render={(props) => <UserPage {...props} />}
    return (
      <Router>
        <div className="container">
          <SearchBar term={term} onChange={(term) => this.setState({ term })}></SearchBar>
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
