import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';

export class TopNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">GistBox - React</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#"><Glyphicon glyph="plus"/> New</NavItem>
                        <NavItem eventKey={2} href="#"><Glyphicon glyph="log-out"/> Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
