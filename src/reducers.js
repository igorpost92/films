import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initSearchBar = {
  titleInput: '',
  status: '',
};

const initialFilters = {
  useFilterByYear: false,
  filterByYear: '',
  sortByField: 'Title',
};

export const searchBar = handleActions({
  [actions.inputTitle](state, { payload: { titleInput } }) {
    return { ...state, titleInput };
  },

  [actions.fetchDataSuccess](state) {
    return { ...state, status: 'success' };
  },
}, initSearchBar);

export const data = handleActions({
  [actions.fetchDataSuccess](state, { payload }) {
    return payload.data;
  },
}, []);

export const filters = handleActions({
  // [actions.setFilter](state, { payload: { value } }) {
  //   return { ...state, ...value };
  // },
  [actions.sort](state, { payload: { sortByField } }) {
    return { ...state, sortByField };
  },
}, initialFilters);
