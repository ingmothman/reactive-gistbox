import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';

export default class GistsListFilter extends Component {
    constructor(props) {
        super(props);
        this.sortOrderFields = [];
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    static propTypes = {
        filterChanged: PropTypes.func.isRequired,
    };

    state = {
        filterIsPublic: 2,
        sortField: 'created',
        sortOrder: 'asc'
    };

    handleFilterChange = (value) => {
        this.props.filterChanged(1,2);
        this.setState({
            filterIsPublic: value
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

    render() {
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

}