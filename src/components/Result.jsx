import React from 'react';
import FilmCard from './FilmCard';

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
      <FilmCard key={film.imdbID} data={film} showDetails={this.props.showDetails} />
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
