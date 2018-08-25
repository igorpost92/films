import { createAction } from 'redux-actions';
import { get } from 'axios';

export const inputTitle = createAction('TITLE_INPUT');
export const setFilter = createAction('FILTER_SET');

export const sortBy = createAction('SORT_BY', sortByField => ({ sortByField }));

export const fetchDataRequest = createAction('DATA_FETCH_REQUEST');
export const fetchDataSuccess = createAction('DATA_FETCH_SUCCESS');
export const fetchDataFailure = createAction('DATA_FETCH_FAILURE');

export const fetchData = title => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const { data } = await get('http://www.omdbapi.com', { params: { s: title, apikey: '23135f4d', plot: 'full' } });
    if (data.Response === 'True') {
      dispatch(fetchDataSuccess({ data: Object.values(data.Search) }));
    }
  } catch (e) {
    console.log(e); // eslint-disable-line
    dispatch(fetchDataFailure());
  }
};
