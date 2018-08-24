import React from 'react';

export default class Filters extends React.Component {
  changeSorter = ({ target }) => {
    this.props.sort({ sortByField: target.value });
  };

  // renderFilters = () => (
  //   <fieldset>
  //     <legend>Show only:</legend>
  //     <div>
  //       <input type="checkbox" id={id} name="filter-by" value="all" onChange={this.changeSorter} checked={checked} />
  //       <label htmlFor={id}>{s}</label>
  //     </div>
  //   </fieldset>
  // );

  renderSortBy = () => {
    const { sorters } = this.props;

    const items = sorters.map((s) => {
      const id = `sort-by-${s}`;
      const checked = this.props.sortByField === s;
      return (
        <div>
          <input type="radio" id={id} name="sort-by" value={s} onChange={this.changeSorter} checked={checked} />
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
        {this.renderSortBy()}
      </div>
    );
  }
}
