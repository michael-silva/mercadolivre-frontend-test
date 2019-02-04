import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
/*import { StoreState } from '../types';

const store = createStore<StoreState, any, any, any>(rootReducer, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});*/

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;