import { connect } from 'react-redux';
import { sortBy } from 'lodash';

import Result from '../components/Result';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { data } = state;
  const { sortByField } = state.filters;

  // TODO: filter
  const result = sortBy(data, [sortByField]);

  return { data: result };
};

export default connect(mapStateToProps, actionCreators)(Result);
