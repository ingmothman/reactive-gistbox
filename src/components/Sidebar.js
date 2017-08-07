import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {reactLoading} from './../helpers';

export default class Sidebar extends Component {

    static propTypes = {
        categoryChanged: PropTypes.func.isRequired,
        activeCategoryId: PropTypes.string.isRequired,
    };

    state = {
        categories: undefined,
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

    handleCategoryChanged = (e, value)=> {
        e.preventDefault();
        this.props.categoryChanged(value);
    };


    render() {
        const {categories} = this.state;

        let content;
        if (categories === undefined) {
            content = reactLoading();
        }
        else if (categories && categories.length) {
            const allCategoriesFilter = [{
                "id": 'all',
                "name": "All"
            }];
            content = allCategoriesFilter.concat(categories).map((cat, index) => {
                const active = (cat.id === this.props.activeCategoryId ? 'active' : '');
                return <li key={cat.id} role="presentation" className={active}>
                    <a onClick={(e) => this.handleCategoryChanged(e, cat.id)}
                       title={cat.name}
                       role="button" href="#">
                        {cat.name}
                    </a>
                </li>;
            });
            content = <div className="row">
                <div className="col-body col-xs-12">
                    <p>&nbsp;</p>
                    <h4>Filter By Categories:</h4>
                    <ul className="nav-sidebar nav">{content}</ul>
                </div>
            </div>;
        }

        return (<div className="col-xs-12 col-xs-push-0 col-md-2 col col-sidebar">{content}</div>);
    }
}