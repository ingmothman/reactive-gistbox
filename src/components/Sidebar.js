import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reactLoading } from './../helpers';

import { filterChanged } from '../actionCreators/items';
import { loadCategories } from '../actionCreators/categories';

class Sidebar extends Component {

  componentDidMount() {
    this.props.loadCategories();
  }

  wrap = (content) => {
    return <div className="col-xs-12 col-xs-push-0 col-md-2 col col-sidebar">{content}</div>;
  };

  render() {
    const { list, isLoading, filterChanged } = this.props;

    if (isLoading === true) {
      return this.wrap(reactLoading());
    }

    if (list && list.length) {
      const allCategoriesFilter = [{
        id: 'all',
        name: 'All',
      }];
      let content = allCategoriesFilter.concat(list).map((cat) => {
        const active = (cat.id === this.props.activeId ? 'active' : '');
        return (<li key={cat.id} role="presentation" className={active}>
          <button
            onClick={(e) => {
              e.preventDefault();
              filterChanged({ category: cat.id });
            }}
            title={cat.name}
          >
            {cat.name}
          </button>
        </li>);
      });
      content = (<div className="row">
        <div className="col-body col-xs-12">
          <p>&nbsp;</p>
          <h4>Filter By Categories:</h4>
          <ul className="nav-sidebar nav">{content}</ul>
        </div>
      </div>);

      return this.wrap(content);
    }
  }
}


const mapStateToProps = (state) => {
  return {
    ...state.categories,
    activeId: state.items.filters.category,
  };
};
const mapDispatchToProps = {
  filterChanged,
  loadCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
