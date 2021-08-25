import { createStore, compose, combineReducers } from 'redux';
import { testReducer } from './reducers/testReducer';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({ testData: testReducer }),
  composeEnhancers()
);
