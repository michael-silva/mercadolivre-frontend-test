import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from "react-router";
import ProductListContainer from '../containers/ProductListContainer';
import ProductDetailContainer from '../containers/ProductDetailContainer';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import SearchBarContainer from '../containers/SearchBarContainer';


const App = () => (
    <div className="container">
      <SearchBarContainer></SearchBarContainer>
      <div className="row row-block -bottom">
        <div className="col-sm-offset-1 col-sm-10">
          <BreadcrumbContainer></BreadcrumbContainer>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-offset-1 col-sm-10">
          <Switch>
            <Route exact path="/" component={ProductListContainer} />
            <Route exact path="/items" component={ProductListContainer} />
            <Route path="/items/:id" component={ProductDetailContainer} />
          </Switch>
        </div>
      </div>
    </div>
);

export default App;
