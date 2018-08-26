import { createAction } from 'redux-actions';
import { getData } from './utils';

export const inputTitle = createAction('TITLE_INPUT');
export const setFilter = createAction('FILTER_SET');

export const sortBy = createAction('SORT_BY', sortByField => ({ sortByField }));

export const fetchDataRequest = createAction('DATA_FETCH_REQUEST');
export const fetchDataSuccess = createAction('DATA_FETCH_SUCCESS');
export const fetchDataFailure = createAction('DATA_FETCH_FAILURE'); // TODO:

export const fetchDetailsRequest = createAction('DETAILS_FETCH_REQUEST');
export const fetchDetailsSuccess = createAction('DETAILS_FETCH_SUCCESS');
export const fetchDetailsFailure = createAction('DETAILS_FETCH_FAILURE'); // TODO:

export const fetchData = title => async (dispatch) => {
  dispatch(fetchDataRequest());

  const url = 'http://www.omdbapi.com';
  const params = { s: title, apikey: '23135f4d', plot: 'full' };
  const { data, error } = await getData(url, params);

  if (error) {
    console.log(e); // eslint-disable-line
    dispatch(fetchDataFailure());
    return;
  }

  // TODO: not found or etc
  const result = data.Response === 'True' ? Object.values(data.Search) : [];
  dispatch(fetchDataSuccess({ data: result }));
};

export const showDetails = id => async (dispatch) => {
  dispatch(fetchDetailsRequest());

  // TODO:
  // setTimeout(async () => {
  //   const url = 'http://www.omdbapi.com';
  //   const params = { i: id, apikey: '23135f4d', plot: 'full' };
  //   const { data, error } = await getData(url, params);

  //   if (error) {
  //     console.log(e); // eslint-disable-line
  //     dispatch(fetchDetailsFailure());
  //     return;
  //   }

  //   const result = data.Response === 'True' ? data : {};
  //   dispatch(fetchDetailsSuccess({ details: result }));
  // }, 6000);


  const url = 'http://www.omdbapi.com';
  const params = { i: id, apikey: '23135f4d', plot: 'full' };
  const { data, error } = await getData(url, params);

  if (error) {
    console.log(e); // eslint-disable-line
    dispatch(fetchDetailsFailure());
    return;
  }

  // TODO: not found or etc
  const result = data.Response === 'True' ? data : {};
  dispatch(fetchDetailsSuccess({ details: result }));
};

export const closeDetails = createAction('DETAILS_CLOSE');
