import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, NavItem} from 'react-bootstrap';
import shallowequal from 'shallowequal';
import ReactLoading from 'react-loading';
import axios from 'axios';


export class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.handleCategoryChanged = this.handleCategoryChanged.bind(this);
    }


    state = {
        categories: undefined,
        activeCategoryId: 0,
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


    render() {
        const {categories} = this.state;

        let content;
        if (categories === undefined) {
            content = <ReactLoading delay={0}
                                    className="box-center sub-loader"
                                    type={'bubbles'}
                                    color={'#45aeea'}
                                    height={100}
                                    width={100}/>;
        }
        else if (categories && categories.length) {
            content = categories.map((cat, index) => {
                return <LinkContainer key={cat.id} to={`/${cat.id}`}>
                    <NavItem eventKey={index + 1} title={cat.name}>{cat.name}</NavItem>
                </LinkContainer>
            });
            content = <div className="row">
                <div className="col-body col-xs-12">
                    <h4>Categories</h4>
                    <Nav key="categories" className="nav-sidebar" activeKey={1}>{content}</Nav>
                </div>
            </div>;
        }

        return (<div className="col-xs-12 col-xs-push-0 col-md-2 col col-sidebar">{content}</div>);
    }
}