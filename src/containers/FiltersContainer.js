import { connect } from 'react-redux';

import Filters from '../components/Filters';
import * as actionCreators from '../actions';

const sorters = ['Title', 'Year'];

const mapStateToProps = (state) => {
  const { useFilterByYear, filterByYear, sortByField } = state.filters;
  return {
    useFilterByYear, filterByYear, sortByField, sorters,
  };
};

export default connect(mapStateToProps, actionCreators)(Filters);
