import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from "prop-types";
import '../styles/App.scss';
import { Route, Switch } from "react-router";
import ErrorBoundary from '../containers/ErrorBoundary';
import ProductListContainer from '../containers/ProductListContainer';
import ProductDetailContainer from '../containers/ProductDetailContainer';
import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import SearchBarContainer from '../containers/SearchBarContainer';

const App = ({ title, meta }) => (
    <div className="container">
      <Helmet title={title} meta={meta}></Helmet>
      <SearchBarContainer></SearchBarContainer>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default App;
