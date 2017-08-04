import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import shallowEqual from 'shallowequal';

export default class GistsListFilter extends Component {

    static propTypes = {
        filterChanged: PropTypes.func.isRequired,
    };

    state = {
        filterIsPublic: 2,
        sortField: 'created',
        sortOrder: 'asc'
    };


    handleFilterChange = (value) => {
        this.setState({
            filterIsPublic: value
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        // do not update if nothing has changed.
        if (shallowEqual(this.props, nextProps) && shallowEqual(this.state, nextState)) {
            return false;
        }

        // Update only if the state has changed
        if (shallowEqual(this.props, nextProps) && !shallowEqual(this.state, nextState)) {
            const {filterIsPublic, sortField, sortOrder} = nextState;
            this.props.filterChanged(
                Object.assign(
                    filterIsPublic !== 2 ? {'isPublic': !!filterIsPublic} : {},
                    {
                        _sort: sortField,
                        _order: sortOrder
                    }
                )
            );
            return true;
        }
        return true;
    }


    handleSortChange = (e) => {
        e.preventDefault();
        const {name: sortField, value: sortOrder} = e.currentTarget;
        // Negate the current value
        const newSortOrder = ((sortOrder === 'asc') ? 'desc' : 'asc');
        e.currentTarget.value = newSortOrder;
        this.setState({
            sortField: sortField,
            sortOrder: newSortOrder
        });
    };

    render() {
        const sortButtons = ['created', 'updated'].map(name => {
            const icons = {
                asc: <i className="glyphicon glyphicon-sort-by-attributes"/>,
                desc: <i className="glyphicon glyphicon-sort-by-attributes-alt"/>
            };
            const currentField = (this.state.sortField === name);
            return <button key={name} name={name}
                           value={currentField ? this.state.sortOrder : 'asc'}
                           onClick={(e) => {
                               this.handleSortChange(e)
                           }}
                           className="btn btn-sm btn-link">
                {currentField ? icons[this.state.sortOrder] : ''} {name.upperCaseFirst()}
            </button>;
        });
        return (
            <div className="btn-toolbar">
                <ToggleButtonGroup type="radio"
                                   name="filterAccessLevel"
                                   value={this.state.filterIsPublic}
                                   onChange={(e) => {
                                       this.handleFilterChange(e)
                                   }}>
                    <ToggleButton bsSize="small" value={2}>All</ToggleButton>
                    <ToggleButton bsSize="small" value={1}>Public</ToggleButton>
                    <ToggleButton bsSize="small" value={0}>Private</ToggleButton>
                </ToggleButtonGroup>
                <div className="pull-right btn-group">
                    {sortButtons}
                </div>
            </div>
        );
    }

}