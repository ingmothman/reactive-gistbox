import React, {Component} from 'react';
import {GistsList} from "./GistsList";
import {GistDetail} from "./GistDetail";
import {Sidebar} from "./Sidebar";
import {TopNavbar} from "./TopNavbar";

import axios from 'axios';

class App extends Component {

    state = {
        items: [],
        itemsFilters: [],
        itemsOrder: ['created', 'asc'],
        categories: [],
        activeCategoryId: 0,
        activeItemId: 0,
        activeItem: null,

    };

    componentWillMount() {
        this.loadItems();
        this.loadCategories();
    }

    // componentWillUpdate() {
    //     this.loadItems();
    //     this.loadCategories();
    // }

    loadItems() {
        axios.get('http://localhost:9914/items')
            .then((response) => {
                this.setState({
                    items: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    loadCategories() {
        axios.get('http://localhost:9914/categories')
            .then((response) => {
                this.setState({
                    categories: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    categoryChangeHandler(value) {
        this.setState({
            activeCategoryId: value
        });
    }

    handleItemChanged(value) {
        this.setState({
            activeItemId: value
        });
    }

    handleFilterChanged(filters, order) {
        this.setState({
            itemsFilters: filters,
            itemsOrder: order,
        });
    }


    render() {
        return (
            <main>
                <TopNavbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar categoryChangeHandler={this.categoryChangeHandler} categories={this.state.categories}/>
                        <GistsList filterChanged={this.handleFilterChanged}
                                   itemChanged={this.handleItemChanged}
                                   items={this.state.items}/>
                        <GistDetail activeitem={this.state.activeItem}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
