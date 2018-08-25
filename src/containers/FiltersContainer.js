import { connect } from 'react-redux';

import Filters from '../components/Filters';
import { setFilter, sortBy } from '../actions';

const sorters = ['Title', 'Year'];
const movieTypes = ['movie', 'series', 'episode'];

const mapStateToProps = (state) => {
  const { sortByField, filterByMovieType } = state.filters;
  return {
    sortByField, sorters, filterByMovieType, movieTypes,
  };
};

export default connect(mapStateToProps, { setFilter, sortBy })(Filters);
