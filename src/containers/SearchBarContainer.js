import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { searchBar } = state;
  return { ...searchBar };
};

export default connect(mapStateToProps, actionCreators)(SearchBar);
