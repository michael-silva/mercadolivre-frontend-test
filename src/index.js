import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';

import createStore from './store';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(window.REDUX_DATA);

const root = document.getElementById('root');

const jsx = (
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>);

if (process.env.REACT_APP_ENV === 'production') {
  ReactDOM.hydrate(jsx, root);
}
else {
  ReactDOM.render(jsx, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
