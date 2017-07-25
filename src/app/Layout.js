import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem,Glyphicon} from 'react-bootstrap';
import {CategoriesList} from "./CategoriesList";
import {GistDetail} from "./GistDetail";

export class TopNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">GistBox - React</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#"><Glyphicon glyph="plus" /> New</NavItem>
                        <NavItem eventKey={2} href="#"><Glyphicon glyph="log-out" /> Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


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

export class Container extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <CategoriesList/>
                    <GistDetail/>
                </div>
            </div>
        );
    }
}
