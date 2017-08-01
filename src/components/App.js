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
        this.handleFilterChanged = this.handleFilterChanged.bind(this);
        this.handleItemChanged = this.handleItemChanged.bind(this);
        this.handleCategoryChanged = this.handleCategoryChanged.bind(this);
    }

    // static propTypes = {
    //     itemsFilters: PropTypes.array.isRequired,
    //     itemsOrder: PropTypes.array.isRequired,
    //     filterChanged: PropTypes.func.isRequired,
    //     itemChanged: PropTypes.func.isRequired,
    //     activeItemId: PropTypes.number.isRequired,
    //     activeCategoryId: PropTypes.number.isRequired,
    // };

    // defaultProps = {
    //     itemsFilters: [],
    //     itemsOrder: ['created', 'asc'],
    //     activeCategoryId: 0,
    //     activeItemId: 0,
    // };

    state = {
        items: undefined,
        categories: undefined,
        activeItem: null,
        itemsFilters: {},
        itemsOrder: ['created', 'asc'],
        activeCategoryId: 0,
        activeItemId: 0,
    };


    componentDidMount() {
        this.loadItems();
        this.loadCategories();
    }

    loadItems() {
        let params = {};
        // console.log(this.state.itemsFilters);
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

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps);
        // this.loadSubscriptionData(nextProps.subscriptionId);
    };

    shouldComponentUpdate(nextProps, nextState) {
        // const isFiltersChanged = shallowequal(this.props, nextProps);
        // const isEqualStates = shallowequal(this.state, nextState);
        // console.log("shouldComponentUpdate:", isEqualProps, isEqualStates);
        // return !isEqualProps || !isEqualStates;
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }


    handleFilterChanged(filters, order) {
        this.setState({
            itemsFilters: filters,
            itemsOrder: order,
        });
    }


    render() {
        const {categories, items} = this.state;

        if (categories === undefined || items === undefined) {
            // Still loading...
            return (<ReactLoading delay={0} className="box-center" type={'bubbles'} color={'#45aeea'} height={100} width={100}/>);
        }

        return (
            <main>
                <TopNavbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar categoryChanged={this.handleCategoryChanged} categories={categories}/>
                        <GistsList filterChanged={this.handleFilterChanged}
                                   itemChanged={this.handleItemChanged}
                                   activeItemId={this.state.activeItemId}
                                   items={items}/>
                        <GistDetail activeitem={this.state.activeItem}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
