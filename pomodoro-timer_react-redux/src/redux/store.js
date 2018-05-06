import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import * as reducers from './reducers';


const initialState = {};

export const store = createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(logger)
);