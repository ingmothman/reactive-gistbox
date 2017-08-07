import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import {reactLoading} from "../../helpers";

export default class ItemsListFilter extends Component {
    static propTypes = {
        filterChanged: PropTypes.func.isRequired,
        filters: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    renderSortButtons() {
        const {filters} = this.props;
        return (
            ['created', 'updated'].map(name => {
                const icons = {
                    asc: <i className="glyphicon glyphicon-sort-by-attributes"/>,
                    desc: <i className="glyphicon glyphicon-sort-by-attributes-alt"/>
                };
                const currentField = (filters._sort === name);
                return <button key={name} name={name}
                               value={currentField ? filters._order : 'asc'}
                               className="btn btn-sm btn-link"
                               onClick={(e) => {
                                   const {name, value} = e.currentTarget;
                                   const newValue = (value === 'asc') ? 'desc' : 'asc';
                                   e.currentTarget.value = newValue;
                                   this.props.filterChanged({_sort: name, _order: newValue});
                               }}>
                    {currentField ? icons[filters._order] : ''} {name.upperCaseFirst()}
                </button>;
            })
        );
    }

    render() {
        if (this.props.isLoading) {
            return <div className="btn-toolbar">{reactLoading()}</div>;
        }
        const {filters} = this.props;
        return (
            <div className="btn-toolbar">
                <ToggleButtonGroup type="radio"
                                   name="filterAccessLevel"
                                   value={filters.isPublic ? filters.isPublic : 'all'}
                                   onChange={(e) => {
                                       this.props.filterChanged({isPublic: e});
                                   }}>
                    <ToggleButton bsSize="small" value='all'>All</ToggleButton>
                    <ToggleButton bsSize="small" value='true'>Public</ToggleButton>
                    <ToggleButton bsSize="small" value='false'>Private</ToggleButton>
                </ToggleButtonGroup>
                <div className="pull-right btn-group">
                    {this.renderSortButtons()}
                </div>
            </div>
        );
    }

}