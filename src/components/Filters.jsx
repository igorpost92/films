import React from 'react';

export default class Filters extends React.Component {
  sortBy = ({ target }) => {
    this.props.sortBy(target.value);
  };

  setFilter = ({ target }) => {
    const { value, checked } = target;
    this.props.setFilter({ value, checked });
  };

  renderFilters = () => {
    const { filterByMovieType, movieTypes } = this.props;

    const items = movieTypes.map((type) => {
      const isFilterSet = filterByMovieType[type] || false;
      const id = `filter-type-${type}`;

      return (
        <div key={id}>
          <input type="checkbox" id={id} name="filter-type" value={type} onChange={this.setFilter} checked={isFilterSet} />
          <label htmlFor={id}>{type}</label>
        </div>
      );
    });

    return (
      <fieldset>
        <legend>Show only:</legend>
        {items}
      </fieldset>
    );
  };

  renderSortBy = () => {
    const { sortByField, sorters } = this.props;

    const items = sorters.map((s) => {
      const id = `sort-by-${s}`;
      const checked = sortByField === s;
      return (
        <div key={id}>
          <input type="radio" id={id} name="sort-by" value={s} onChange={this.sortBy} checked={checked} />
          <label htmlFor={id}>{s}</label>
        </div>
      );
    });

    return (
      <fieldset>
        <legend>Sort by:</legend>
        {items}
      </fieldset>
    );
  };

  render() {
    return (
      <div className="filters">
        {this.renderFilters()}
        {this.renderSortBy()}
      </div>
    );
  }
}
