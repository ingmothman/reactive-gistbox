import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {FormModel} from "./FormModel";

export default class TopNavigation extends Component {

    constructor(props) {
        super(props);
        this.closeFormModal = this.closeFormModal.bind(this);
    }

    state = {
        isFormModalVisible: false,
    };


    closeFormModal() {
        this.setState({isFormModalVisible: false})
    };

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
                        <FormModel show={this.state.isFormModalVisible} onHide={this.closeFormModal}/>
                        <NavItem eventKey={1} href="#"
                                 onClick={() => this.setState({isFormModalVisible: true})}>
                            <Glyphicon glyph="plus"/> New
                        </NavItem>
                        <NavItem eventKey={2} href="#"><Glyphicon glyph="log-out"/> Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}