import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import shallowequal from 'shallowequal';

export default class GistsListFilter extends Component {
    constructor(props) {
        super(props);
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
        // Update parent
        this.setState({
            filterIsPublic: value
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (
            true === shallowequal(this.props, nextProps) &&
            true === shallowequal(this.state, nextState)
        ) {
            return false
        }
        if (
            true === shallowequal(this.props, nextProps) &&
            false === shallowequal(this.state, nextState)) {
            this.props.filterChanged(
                Object.assign(
                    nextState.filterIsPublic !== 2 ? {'isPublic': !!nextState.filterIsPublic} : {},
                    {
                        _sort: nextState.sortField,
                        _order: nextState.sortOrder
                    }
                )
            );
            return true;
        }
        console.log("Props:", shallowequal(this.props, nextProps), "State:", shallowequal(this.state, nextState));
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
                    {['created', 'updated'].map(name => {
                        const icons = {
                            asc: <i className="glyphicon glyphicon-sort-by-attributes"></i>,
                            desc: <i className="glyphicon glyphicon-sort-by-attributes-alt"></i>
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
                    })}
                </div>
            </div>
        );
    }

}