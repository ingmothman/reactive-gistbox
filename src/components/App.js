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
        // this.props.changeActiveCategory(value);
    };

    render() {
        const {categories, items, item} = this.props;
        return (
            <main>
                <TopNavigation/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar categoryChanged={this.handleCategoryChanged} {...categories} />
                        <List itemChanged={this.handleItemChanged} {...items} activeId={item.activeId}/>
                        <ItemDetail itemChanged={this.handleItemChanged} {...item} />
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