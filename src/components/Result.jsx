import React from 'react';

export default class Result extends React.Component {
  handleInput = ({ target }) => {
    this.props.inputTitle({ titleInput: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchData(this.props.titleInput);
  };

  renderItems = () => {
    const { data } = this.props;
    if (!data.length) {
      return null;
    }

    const items = data.map(film => (
      <div key={film.imdbID} className="film">
        <div className="film__poster">
          <img src={film.Poster} alt="poster" />
        </div>
        <div className="film__info">
          <span className="film__info-label">Title: </span>
          {film.Title}
        </div>
        <div className="film__info">
          <span className="film__info-label">Year: </span>
          {film.Year}
        </div>
        <div className="film__info">
          <span className="film__info-label">Type: </span>
          {film.Type}
        </div>
      </div>
    ));
    return items;
  };

  render() {
    return (
      <div className="films">
        {this.renderItems()}
      </div>
    );
  }
}
