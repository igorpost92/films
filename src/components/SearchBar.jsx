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
    const { searchButtonStatus } = this.props;
    const isActive = searchButtonStatus !== 'processing';
    const buttonTitle = isActive ? 'Search' : 'Loading...';
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input className="search-bar__button" type="submit" value={buttonTitle} disabled={!isActive} />
        <input className="search-bar__title" type="text" value={this.props.titleInput} placeholder="Enter title" required onChange={this.handleInput} />
      </form>
    );
  }
}
