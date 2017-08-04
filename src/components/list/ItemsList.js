import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemsListFilter from './ItemsListFilter';
import axios from 'axios';
import shallowEqual from 'shallowequal';
import {reactLoading} from './../../helpers';
import activeItemComponent from "./../hoc/ActiveItemComponent";
import {ListItem} from "./Listitem";


class ItemsList extends Component {
    constructor(props) {
        super(props);
        const defaultFilters = {_sort: 'created', _order: 'asc'};
        this.state = {
            isLoading: true,
            filters: defaultFilters,
            items: this.loadItems(defaultFilters),
        };
    }

    static propTypes = {
        activeCategoryId: PropTypes.string.isRequired,
    };


    componentWillReceiveProps(nextProps) {
        if (this.props.activeCategoryId !== nextProps.activeCategoryId) {
            let newFilters = this.state.filters;

            if (nextProps.activeCategoryId === '0') {
                delete newFilters.category;
            }
            else {
                newFilters.category = nextProps.activeCategoryId;
            }
            this.setState((prevState) => {
                return {
                    filters: {
                        ...prevState.filters,
                        ...newFilters
                    }
                }
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!shallowEqual(this.state.filters, nextState.filters) || this.props.activeItemId !== nextProps.activeItemId || this.props.activeCategoryId !== nextProps.activeCategoryId) {
            this.loadItems(nextState.filters);
        }
        return (shallowEqual(this.props, nextProps) === false || shallowEqual(this.state, nextState) === false);
    }

    loadItems(params = {}) {
        axios.get('http://localhost:9914/items', {params})
            .then((response) => {
                this.setState({
                    items: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static renderNotFound() {
        return <div className="box-center clear clearfix">
            <h4>No category has been selected!.</h4>
            <ol className="list-unstyled">
                <li>Select a category from categories list</li>
            </ol>
        </div>;
    }

    handleFilterChanged = (filters) => {
        this.setState((prevState) => {
            return {
                filters: {
                    ...prevState.filters,
                    ...filters
                }
            }
        });
    };

    render() {
        const {items} = this.state;
        let content;

        if (items === undefined) {
            content = reactLoading();
        }
        else if (items === []) {
            content = ItemsList.renderNotFound();
        }
        else if (items && items.length) {
            content = <div className="col-body col-xs-12">
                <div className="row">
                    <div className="list-categories list-group">
                        {items.map((item) => <ListItem itemChanged={this.props.itemChanged} key={item.id} {...this.props} item={item} />)}
                    </div>
                </div>
            </div>;
        }

        return (
            <div className="col-xs-12 col-xs-push-0 col-md-3 col-md-push-2 col col-secondary-sidebar">
                <div className="row">
                    <div className="col-header col-xs-12">
                        <ItemsListFilter filterChanged={this.handleFilterChanged}/>
                    </div>
                    {content}
                </div>
            </div>
        );
    }
}

export default activeItemComponent(ItemsList);