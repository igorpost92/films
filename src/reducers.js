import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialSearchBar = {
  titleInput: '',
  searchButtonStatus: 'default',
};

const initialFilters = {
  filterByMovieType: {},
  sortByField: 'Title',
};

const initialMovieDetails = {
  isModalShown: false,
  status: '',
  details: {},
};

export const searchBar = handleActions({
  [actions.inputTitle](state, { payload: { titleInput } }) {
    return { ...state, titleInput };
  },

  [actions.fetchDataRequest](state) {
    return { ...state, searchButtonStatus: 'processing' };
  },

  [actions.fetchDataSuccess](state) {
    return { ...state, searchButtonStatus: 'default' };
  },

  [actions.fetchDataFailure](state) {
    return { ...state, searchButtonStatus: 'error' };
  },
}, initialSearchBar);


export const data = handleActions({
  [actions.fetchDataSuccess](state, { payload }) {
    return payload.data;
  },
}, []);


export const filters = handleActions({
  [actions.setFilter](state, { payload }) {
    return {
      ...state,
      filterByMovieType: {
        ...state.filterByMovieType,
        [payload.value]: payload.checked,
      },
    };
  },
  [actions.sortBy](state, { payload: { sortByField } }) {
    return { ...state, sortByField };
  },
}, initialFilters);


export const movieDetails = handleActions({
  [actions.fetchDetailsRequest](state) {
    return { ...state, status: 'processing', isModalShown: true };
  },

  [actions.fetchDetailsSuccess](state, { payload: { details } }) {
    return { ...state, status: 'success', details };
  },

  [actions.fetchDetailsFailure](state) {
    return { ...state, status: 'error' };
  },

  [actions.closeDetails](state) {
    return {
      ...state, isModalShown: false, status: '', details: {},
    };
  },
}, initialMovieDetails);
