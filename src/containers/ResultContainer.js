import { connect } from 'react-redux';
import { sortBy } from 'lodash';

import Result from '../components/Result';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { data } = state;
  const { sortByField, filterByMovieType } = state.filters;

  // TODO: what if all checked?
  const showAll = Object.values(filterByMovieType).every(checked => checked === false);

  const filtered = data.filter((film) => {
    if (showAll) {
      return true;
    }

    return filterByMovieType[film.Type];
  });
  const result = sortBy(filtered, [sortByField]);

  return { data: result };
};

export default connect(mapStateToProps, actionCreators)(Result);
