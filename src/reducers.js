import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initSearchBar = {
  titleInput: '',
  searchButtonStatus: 'default',
};

const initialFilters = {
  filterByMovieType: {},
  sortByField: 'Title',
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
}, initSearchBar);

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
