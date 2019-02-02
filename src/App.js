import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Breadcrumb from './Breadcrumb';


class App extends Component {
  constructor() {
    super();
    this.state = { term: '', steps: ['Categoria', 'Produto', 'Teste'] };
  }
  render() {
    const { term, steps } = this.state;
    //render={(props) => <UserPage {...props} />}
    return (
      <Router>
        <div className="container">
          <SearchBar term={term} onChange={(term) => this.setState({ term })}></SearchBar>
          <div className="row row-block -bottom">
            <div className="col-sm-offset-1 col-sm-10">
              <Breadcrumb steps={steps}></Breadcrumb>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-offset-1 col-sm-10">
              <Route exact path="/" component={ProductList} />
              <Route exact path="/items" component={ProductList} />
              <Route path="/items/:id" component={ProductDetail} />
            </div>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
