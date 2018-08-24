import 'babel-polyfill';
import { Provider } from 'react-redux';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';

import './styles/App.css';
import * as reducers from './reducers';
import SearchBarContainer from './containers/SearchBarContainer';
import FiltersContainer from './containers/FiltersContainer';
import ResultContainer from './containers/ResultContainer';

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  compose(applyMiddleware(thunk)),
);

render(
  <Provider store={store}>
    <div className="wrapper">
      <SearchBarContainer />
      <FiltersContainer />
      <ResultContainer />
    </div>
  </Provider>,
  document.getElementById('root'),
);
