import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';

export class GistsList extends Component {
    constructor(props) {
        super(props);
        this.sortOrderFields = [];
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    state = {
        accessLevelFilter: 2,
        sortField: 'created',
        sortOrder: 'asc'
    }

    static propTypes = {
        items: PropTypes.array.isRequired,
        activeId: PropTypes.number
    };


    handleFilterChange = (value) => {
        this.setState({
            accessLevelFilter: value
        });
    };
    handleSortChange = (field) => {
        const value = this.sortOrderFields[field].value;
        const newValue = value === 'asc' ? 'desc' : 'asc';
        this.sortOrderFields[field].value = newValue;
        this.setState({
            sortField: field,
            sortOrder: newValue
        });
    };


    renderNotFound() {
        return <div className="box-center clear clearfix">
            <h4>No category has been selected!.</h4>
            <ol className="list-unstyled">
                <li>Select a category from categories list</li>
            </ol>
        </div>;
    }

    renderToolbar() {
        return (
            <div className="btn-toolbar">
                <ToggleButtonGroup type="radio" name="accessLevelFilter" defaultValue={2} onChange={(e) => {
                    this.handleFilterChange(e)
                }}>
                    <ToggleButton bsSize="small" value={2}>All</ToggleButton>
                    <ToggleButton bsSize="small" value={1}>Public</ToggleButton>
                    <ToggleButton bsSize="small" value={0}>Private</ToggleButton>
                </ToggleButtonGroup>
                <div className="pull-right btn-group">
                    <button value={'asc'}
                            onClick={(e) => {
                                this.handleSortChange('created')
                            }}
                            ref={(input) => {
                                this.sortOrderFields['created'] = input
                            }}
                            className="btn btn-sm btn-link">Created
                    </button>
                    <button value={'asc'}
                            onClick={(e) => {
                                this.handleSortChange('updated')
                            }}
                            ref={(input) => {
                                this.sortOrderFields['updated'] = input
                            }}
                            className="btn btn-sm btn-link">Updated
                    </button>
                </div>
            </div>
        );
    }

    renderListItem(item) {
        const isActive = (this.props.activeId === item.id) ? 'active' : '';
        return (
            <Link className={`list-group-item ${isActive}`} key={item.id} to={`/${item.category}/${item.id}`}>
                <h4 className="list-group-item-heading">{item.name}</h4>
                <p className="list-group-item-text">{item.description}</p>
            </Link>
        );
    }

    render() {
        const {accessLevelFilter, sortField, sortOrder} = this.state;
        const items = this.props.items.filter((item) => {
            return ((accessLevelFilter === 2) ? true : (item.isPublic === !!accessLevelFilter));
        }).sort(function (a, b) {
            let aValue = a[sortField];
            let bValue = b[sortField];
            if (sortOrder === 'asc') {
                [aValue, bValue] = [bValue, aValue];
            }
            return (aValue > bValue) ? 1 : ((bValue > aValue) ? -1 : 0);
        });

        const content = items.length ? <div className="col-body col-xs-12">
            <div className="row">
                <div className="list-categories list-group">
                    {items.map((item) => this.renderListItem(item))}
                </div>
            </div>
        </div> : this.renderNotFound();

        return (
            <div className="col-xs-12 col-xs-push-0 col-md-3 col-md-push-2 col col-secondary-sidebar">
                <div className="row">
                    <div className="col-header col-xs-12">{this.renderToolbar()}</div>
                    {content}
                </div>
            </div>
        );
    }
}