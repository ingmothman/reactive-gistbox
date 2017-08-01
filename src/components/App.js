import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GistsList} from "./GistsList";
import {GistDetail} from "./GistDetail";
import {Sidebar} from "./Sidebar";
import {TopNavbar} from "./TopNavbar";
import shallowequal from 'shallowequal';
import ReactLoading from 'react-loading';

import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleItemChanged = this.handleItemChanged.bind(this);
        this.handleCategoryChanged = this.handleCategoryChanged.bind(this);
    }


    state = {
        categories: undefined,
        activeItem: null,
        activeCategoryId: 0,
        activeItemId: 0,
    };


    componentDidMount() {
        this.loadCategories();
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

    handleCategoryChanged(value) {
        this.setState({
            activeCategoryId: value
        });
    }

    handleItemChanged(value) {
        this.setState({
            activeItemId: value
        });
    }


    render() {
        const {categories} = this.state;

        if (categories === undefined) {
            // Still loading...
            return (<ReactLoading delay={0} className="box-center" type={'bubbles'} color={'#45aeea'} height={100}
                                  width={100}/>);
        }

        return (
            <main>
                <TopNavbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar categoryChanged={this.handleCategoryChanged} categories={categories}/>
                        <GistsList itemChanged={this.handleItemChanged}
                                   activeItemId={this.state.activeItemId}/>
                        <GistDetail activeitem={this.state.activeItem}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
