import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, NavItem} from 'react-bootstrap';

import categories from "../data/categories";

export class Sidebar extends Component {

    handleSelect(selectedKey) {
    }

    render() {
        const categoriesNavItems = categories.map((cat, index) => {
            return <LinkContainer key={cat.id} to={`/${cat.id}`}>
                <NavItem eventKey={index + 1} title={cat.name}>{cat.name}</NavItem>
            </LinkContainer>
        });
        return (
            <div className="col-xs-12 col-xs-push-0 col-md-2 col col-sidebar">
                <div className="row">
                    <div className="col-header col-xs-12"></div>
                    <div className="col-body col-xs-12">
                        <h4>Categories</h4>
                        <Nav key="categories" className="nav-sidebar" activeKey={1} onSelect={this.handleSelect}>
                            {categoriesNavItems}
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
}