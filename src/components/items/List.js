import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListFilter from './ListFilter';
import {reactLoading} from './../../helpers';
import {ListItem} from "./ListItem";
import {loadItems} from '../../actionCreators/items';
import {connect} from 'react-redux';

class List extends Component {

    static propTypes = {
        activeId: PropTypes.number.isRequired,
        itemChanged: PropTypes.func.isRequired,
        filterChanged: PropTypes.func.isRequired,
    };


    render() {
        const {list, isLoading, filters, activeId} = this.props;

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
                        <ListFilter filters={filters} filterChanged={this.props.filterChanged}/>
                    </div>
                    <div className="col-body col-xs-12">
                        <div className="row">
                            <div className="list-categories list-group">
                                {list.map((item) => <ListItem itemChanged={this.props.itemChanged}
                                                              key={item.id} activeId={activeId} item={item}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }

    wrap = (content) => {
        return <div className="col-xs-12 col-xs-push-0 col-md-3 col-md-push-2 col col-secondary-sidebar">
            {content}
        </div>;
    };

    renderNotFound = () => {
        return <div className="box-center clear clearfix">
            <h4>No results has been found.</h4>
            <ol className="list-unstyled">
                <li>Please select different filters.</li>
            </ol>
        </div>;
    }
}

export default List;