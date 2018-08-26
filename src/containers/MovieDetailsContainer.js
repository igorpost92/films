import { connect } from 'react-redux';

import MovieDetails from '../components/MovieDetails';
import { closeDetails } from '../actions';

const mapStateToProps = state => state.movieDetails;

export default connect(mapStateToProps, { closeDetails })(MovieDetails);
