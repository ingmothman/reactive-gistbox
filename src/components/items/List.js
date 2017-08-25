import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListFilter from './ListFilter';
import { reactLoading } from './../../helpers';
import { ListItem } from './ListItem';

import { loadItem } from '../../actionCreators/item';
import { filterChanged, loadItems } from '../../actionCreators/items';


class List extends Component {

  componentDidMount() {
    this.props.loadItems(this.props.filters);
  }

  wrap = (content) => {
    return (<div className="col-xs-12 col-xs-push-0 col-md-3 col-md-push-2 col col-secondary-sidebar">
      {content}
    </div>);
  };

  renderNotFound = () => {
    return (<div className="box-center clear clearfix">
      <h4>No results has been found.</h4>
      <ol className="list-unstyled">
        <li>Please select different filters.</li>
      </ol>
    </div>);
  };

  render() {
    const { list, isLoading, filters, activeId, loadItem } = this.props;
    if (isLoading === true) {
      return this.wrap(reactLoading());
    }
    if (list.length === 0) {
      return this.wrap(this.renderNotFound());
    }
    if (list.length > 0) {
      return this.wrap(
        <div className="row">
          <div className="col-header col-xs-12">
            <ListFilter filters={filters} filterChanged={this.props.filterChanged} />
          </div>
          <div className="col-body col-xs-12">
            <div className="row">
              <div className="list-categories list-group">
                {list.map((item) =>
                  (<ListItem
                    itemChanged={loadItem}
                    key={item.id}
                    activeId={activeId}
                    item={item}
                  />))}
              </div>
            </div>
          </div>
        </div>,
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.items,
    activeId: state.item.activeId,
  };
};
const mapDispatchToProps = {
  loadItems,
  loadItem,
  filterChanged,
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
