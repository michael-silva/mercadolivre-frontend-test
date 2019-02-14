import React, { Component } from 'react';

class LazyContainer extends Component {
    render() {
        const { error, loading, children, errorRender, loadingRedner } = this.props;
      if (!!error) {
        // You can render any custom fallback UI
        return errorRender ? errorRender() : <h1>Something went wrong.</h1>;
      }
      else if (loading) {
        // You can render any custom fallback UI
        return loadingRedner ? loadingRedner() : <h1>loading.</h1>;
      }
  
      return children; 
    }
  }
  
  export default LazyContainer;