import React from 'react';

export default class SearchBar extends React.Component {
  handleInput = ({ target }) => {
    this.props.inputTitle({ titleInput: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchData(this.props.titleInput);
  };

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input className="search-bar__button" type="submit" value="Search" />
        <input className="search-bar__title" type="text" value={this.props.titleInput} placeholder="Enter title" required onChange={this.handleInput} />
      </form>
    );
  }
}
