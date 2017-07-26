import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export class Sidebar extends Component {

    handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
    }

    render() {
        return (
            <div className="col-xs-12 col-xs-push-0 col-md-2 col col-sidebar">
                <div className="row">
                    <div className="col-header col-xs-12"></div>
                    <div className="col-body col-xs-12">
                        <h4>Categories</h4>
                        <Nav key="categories" className="nav-sidebar" activeKey={1} onSelect={this.handleSelect}>
                            <NavItem eventKey={1} href="#" title="NavItem 1 content">Category 1</NavItem>
                            <NavItem eventKey={2} href="#" title="NavItem 2 content">Category 2</NavItem>
                            <NavItem eventKey={3} href="#" title="NavItem 3 content">Category 3</NavItem>
                        </Nav>
                        <h4>Labels</h4>
                        <Nav key="labels" className="nav-sidebar" onSelect={this.handleSelect}>
                            <NavItem eventKey={1} href="#" title="NavItem 1 content">label 1</NavItem>
                            <NavItem eventKey={2} href="#" title="NavItem 2 content">label 2</NavItem>
                            <NavItem eventKey={3} href="#" title="NavItem 3 content">label 3</NavItem>
                        </Nav>
                        <h4>Pages</h4>
                        <Nav key="pages" className="nav-sidebar" onSelect={this.handleSelect}>
                            <NavItem eventKey={1} href="#" title="NavItem 1 content">Page 1</NavItem>
                            <NavItem eventKey={2} href="#" title="NavItem 2 content">Page 2</NavItem>
                            <NavItem eventKey={3} href="#" title="NavItem 3 content">Page 3</NavItem>
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
}