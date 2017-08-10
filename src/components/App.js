import React, {Component} from 'react';
import {loadItem} from '../actionCreators/item';
import {loadItems} from '../actionCreators/items';
import {loadCategories} from '../actionCreators/categories';
import {connect} from 'react-redux';

// components
import ItemsList from "./list/ItemsList";
import ItemDetail from "./ItemDetail";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";

class App extends Component {

    static defaultProps = {
        activeCategoryId: 'all',
        activeItemId: 0
    };

    componentDidMount() {
        console.log("componentDidMount", this.props);
        const {initItems, loadItem, loadCategories} = this.props;
        // initItems();
        // loadItem();
        // loadCategories();
    }

    handleItemChanged = (value) => {
        this.props.loadItem(value);
    };

    handleCategoryChanged = (value) => {
        // this.props.changeActiveCategory(value);
    };

    render() {
        const {activeCategoryId, item, items, categories, activeItemId, filters} = this.props;
        return (
            <main>
                <TopNavigation/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar categoryChanged={this.handleCategoryChanged}
                                 categories={categories}
                                 activeCategoryId={activeCategoryId}
                        />
                        <ItemsList itemChanged={this.handleItemChanged}
                                   activeItemId={activeItemId}
                                   items={items}
                                   filters={filters}
                                   activeCategoryId={activeCategoryId}
                        />
                        <ItemDetail itemChanged={this.handleItemChanged}
                                    activeItem={item}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
    const {categories, items, item} = state;
    return {categories, items, item};
};
const mapDispatchToProps = {
    loadItem,
    loadItems,
    loadCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);