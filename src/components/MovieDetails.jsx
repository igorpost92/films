import React from 'react';

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.backdrop = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.isModalShown && this.props.status === 'success') {
      // focus so we could use ESC to close modal
      this.backdrop.current.focus();
    }
  }

  closeDetails = () => {
    this.props.closeDetails();
  };

  handleEscPress = ({ keyCode }) => {
    if (keyCode === 27) {
      this.props.closeDetails();
    }
  };

  // TODO: center vertically
  renderWaitIndicator = () => (
    <div className="spinner">
      <div />
      <div />
      <div />
    </div>
  );

  renderDetails = () => {
    const { details } = this.props;

    const labels = ['Year', 'Country', 'Genre', 'Type', 'Director', 'Writer', 'Actors', 'imdbRating', 'imdbVotes'];
    const info = labels.map(type => (
      [
        <span className="movie-details__info-label">{type}</span>,
        <span>{details[type]}</span>,
      ]
    ));

    return [
      <div className="movie-details__title">{details.Title}</div>,
      <div className="movie-details__poster">
        <img src={details.Poster} alt={details.Title} title={details.Title} />
      </div>,
      <div className="movie-details__info">
        {info}
      </div>,
      <div className="movie-details__plot">
        {details.Plot}
      </div>,
    ];
  };

  render() {
    const { isModalShown } = this.props;
    document.body.classList.toggle('modal-open', isModalShown);

    if (!isModalShown) {
      return null;
    }

    return (
      [
        <div
          className="modal-backdrop"
          tabIndex="-1"
          role="presentation"
          ref={this.backdrop}
          onClick={this.closeDetails}
          onKeyDown={this.handleEscPress}
        />,
        <div className="movie-details">
          {this.props.status === 'processing' ? this.renderWaitIndicator() : this.renderDetails()}
        </div>,
      ]
    );
  }
}
