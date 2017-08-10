import React, {Component} from 'react';
import {loadItem} from '../actionCreators/item';
import {loadItems} from '../actionCreators/items';
import {loadCategories} from '../actionCreators/categories';
import {connect} from 'react-redux';
// components
import List from "./items/List";
import ItemDetail from "./ItemDetail";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";

class App extends Component {

    componentDidMount() {
        const {loadItems, loadItem, loadCategories} = this.props;
        const {items, item} = this.props;
        loadCategories();
        loadItems(items.filters);
        loadItem(item.activeId);
    }

    handleItemChanged = (value) => {
        this.props.loadItem(value);
    };

    handleCategoryChanged = (value) => {
        this.props.loadItems({
            ...this.props.items.filters,
            category: value
        });
    };

    handleFilterChanged = (filters) => {
        this.props.loadItems({
            ...this.props.items.filters,
            ...filters
        });

    };


    render() {
        const {categories, items, item, loadItem} = this.props;
        return (
            <main>
                <TopNavigation/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar categoryChanged={this.handleCategoryChanged}
                                 activeId={items.filters.category} {...categories} />
                        <List {...items} itemChanged={loadItem} filterChanged={(e) => {
                            this.handleFilterChanged(e)
                        }}
                              activeId={item.activeId}/>
                        <ItemDetail itemRemoved={loadItem} {...item} />
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    const {categories, items, item} = state;
    return {categories, items, item};
};
const mapDispatchToProps = {
    loadItem,
    loadItems,
    loadCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);