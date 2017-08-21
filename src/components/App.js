import React, {Component} from 'react';
import {loadItem, removeItem} from '../actionCreators/item';
import {loadItems} from '../actionCreators/items';
import {loadCategories} from '../actionCreators/categories';
import {preloaderStarted} from '../actionCreators/preloader';
import {connect} from 'react-redux';
// components
import List from "./items/List";
import ItemDetail from "./ItemDetail";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import Preloader from "./Preloader";

class App extends Component {
    componentWillMount() {
        this.props.preloaderStarted();
    }


    componentDidMount() {
        const {loadItems, loadItem, loadCategories} = this.props;
        const {items, item} = this.props;
        loadCategories();
        loadItems(items.filters);
        loadItem(item.activeId);
    }

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
        const {categories, items, item, loadItem, removeItem, preloader} = this.props;
        return (
            <main>
                <Preloader {...preloader}/>
                <TopNavigation/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar categoryChanged={this.handleCategoryChanged}
                                 activeId={items.filters.category} {...categories} />
                        <List {...items} itemChanged={loadItem} filterChanged={(e) => {
                            this.handleFilterChanged(e)
                        }}
                              activeId={item.activeId}/>
                        <ItemDetail removeItem={removeItem} itemRemoved={loadItem} {...item} />
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    const {categories, items, item, preloader} = state;
    return {categories, items, item, preloader};
};
const mapDispatchToProps = {
    loadItem,
    loadItems,
    loadCategories,
    removeItem,
    preloaderStarted,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);