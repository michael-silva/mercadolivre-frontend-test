import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import App from './components/App';
//import store from './store';
import * as serviceWorker from './serviceWorker';

import createStore from './store';
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(window.REDUX_DATA);

const root = document.getElementById('root');

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
