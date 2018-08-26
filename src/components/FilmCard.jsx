import React from 'react';

export default class FilmCard extends React.Component {
  showDetails = () => {
    const { imdbID } = this.props.data;
    this.props.showDetails(imdbID);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="film" onClick={this.showDetails}>
        <div className="film__poster">
          <img src={data.Poster} alt={data.Title} title={data.Title} />
        </div>
        <div className="film__info">
          <span className="film__info-label">Title: </span>
          {data.Title}
        </div>
        <div className="film__info">
          <span className="film__info-label">Year: </span>
          {data.Year}
        </div>
        <div className="film__info">
          <span className="film__info-label">Type: </span>
          {data.Type}
        </div>
      </div>
    );
  }
}
