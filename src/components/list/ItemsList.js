import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemsListFilter from './ItemsListFilter';
import axios from 'axios';
import eq from 'shallowequal';
import {reactLoading} from './../../helpers';
import activeItemComponent from "./../hoc/ActiveItemComponent";
import {ListItem} from "./Listitem";

class ItemsList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    static propTypes = {
        items: PropTypes.array.isRequired,
        itemsFilters: PropTypes.array.isRequired,
        activeCategoryId: PropTypes.string.isRequired,
        activeItemId: PropTypes.number.isRequired,
    };


    componentWillReceiveProps(nextProps) {
        if (this.props.activeCategoryId !== nextProps.activeCategoryId) {
            this.handleFilterChanged({category: nextProps.activeCategoryId});
        }
        const itemIsDeleted = !eq(this.props.activeItemId, nextProps.activeItemId) && nextProps.activeItemId === 0;
        if (itemIsDeleted) {
            this.setState({isLoading: true});
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        const {state, props} = this;

        const filtersHasChanged = !eq(state.itemsFilters, nextState.itemsFilters);
        const categoryHasChanged = !eq(props.activeCategoryId, nextProps.activeCategoryId);
        const itemIsDeleted = !eq(props.activeItemId, nextProps.activeItemId) && nextProps.activeItemId === 0;
        if (filtersHasChanged || categoryHasChanged || itemIsDeleted) {
            // this.loadItems(nextState.itemsFilters);
        }

        const propsHasChanged = !eq(props, nextProps);
        const stateHasChanged = !eq(state, nextState);
        return (propsHasChanged || stateHasChanged);
    }


    static renderNotFound() {
        return <div className="box-center clear clearfix">
            <h4>No results has been found.</h4>
            <ol className="list-unstyled">
                <li>Please select different itemsFilters.</li>
            </ol>
        </div>;
    }

    handleFilterChanged = (itemsFilters) => {
        this.setState((prevState) => {
            return {
                isLoading: true,
                itemsFilters: {
                    ...prevState.itemsFilters,
                    ...itemsFilters
                }
            }
        });
    };

    render() {
        const {items, isLoading} = this.state;
        let content;

        if (isLoading) {
            content = reactLoading();
        }
        else if (typeof items === "object" && items.length === 0) {
            content = ItemsList.renderNotFound();
        }
        else if (items && items.length) {
            content = <div className="row">
                <div className="col-header col-xs-12">
                    <ItemsListFilter itemsFilters={this.state.itemsFilters}
                                     filterChanged={this.handleFilterChanged}/>
                </div>
                <div className="col-body col-xs-12">
                    <div className="row">
                        <div className="list-categories list-group">
                            {items.map((item) => <ListItem itemChanged={this.props.itemChanged}
                                                           key={item.id} {...this.props} item={item}/>)}
                        </div>
                    </div>
                </div>
            </div>;
        }

        return (
            <div className="col-xs-12 col-xs-push-0 col-md-3 col-md-push-2 col col-secondary-sidebar">
                {content}
            </div>
        );
    }
}

export default activeItemComponent(ItemsList);