import React, { Component } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';

class LazyContainer extends Component {
    render() {
        const { error, loading, children, errorRender, loadingRedner } = this.props;
      if (!!error) {
        // You can render any custom fallback UI
        return errorRender ? errorRender() : <Error />;
      }
      else if (loading) {
        // You can render any custom fallback UI
        return loadingRedner ? loadingRedner() : <Loading />;
      }
  
      return children; 
    }
  }
  
  export default LazyContainer;
