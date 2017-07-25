import React, {Component} from 'react';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import {ButtonGroup, Button, ButtonToolbar, Glyphicon, ListGroup, ListGroupItem} from 'react-bootstrap';

export class CategoriesList extends Component {

    render() {
        const filtersButtonGroup = (
            <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="access-level" defaultValue={1}>
                    <ToggleButton bsSize="small" value={1}>All</ToggleButton>
                    <ToggleButton bsSize="small" value={2}>Public</ToggleButton>
                    <ToggleButton bsSize="small" value={3}>Private</ToggleButton>
                </ToggleButtonGroup>
                <ButtonGroup className="pull-right" type="radio" name="sort-order" defaultValue={1}>
                    <Button bsStyle="link" bsSize="small" value={1}><Glyphicon glyph="sort-by-attributes"/>
                        Created</Button>
                    <Button bsStyle="link" bsSize="small" value={2}><Glyphicon glyph=""/> Updated</Button>
                </ButtonGroup>
            </ButtonToolbar>
        );
        return (
            <div className="col-xs-12 col-xs-push-0 col-md-3 col-md-push-2 col col-secondary-sidebar">
                <div className="row">
                    <div className="col-header col-xs-12">{filtersButtonGroup}</div>
                    <div className="col-body col-xs-12">
                        <div className="row">
                            <ListGroup className="list-categories">
                                <ListGroupItem href="#" header="Hic iusto non quod?">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Fugiat, quo!</ListGroupItem>
                                <ListGroupItem href="#" active header="Aspernatur cupiditate fugiat nemo.">Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Adipisci ex ipsam vel.</ListGroupItem>
                                <ListGroupItem href="#" header="A asperiores magni rerum?">Lorem ipsum dolor
                                    sit.</ListGroupItem>
                                <ListGroupItem href="#" header="Autem dolor inventore pariatur.">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Veniam!</ListGroupItem>
                                <ListGroupItem href="#" header="Hic iusto non quod?">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Fugiat, quo!</ListGroupItem>
                                <ListGroupItem href="#" header="Aspernatur cupiditate fugiat nemo.">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Adipisci ex ipsam vel.</ListGroupItem>
                                <ListGroupItem href="#" header="A asperiores magni rerum?">Lorem ipsum dolor
                                    sit.</ListGroupItem>
                                <ListGroupItem href="#" header="Autem dolor inventore pariatur.">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Veniam!</ListGroupItem>
                                <ListGroupItem href="#" header="Hic iusto non quod?">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Fugiat, quo!</ListGroupItem>
                                <ListGroupItem href="#" header="Aspernatur cupiditate fugiat nemo.">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Adipisci ex ipsam vel.</ListGroupItem>
                                <ListGroupItem href="#" header="A asperiores magni rerum?">Lorem ipsum dolor
                                    sit.</ListGroupItem>
                                <ListGroupItem href="#" header="Autem dolor inventore pariatur.">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Veniam!</ListGroupItem>
                                <ListGroupItem href="#" header="Hic iusto non quod?">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Fugiat, quo!</ListGroupItem>
                                <ListGroupItem href="#" header="Aspernatur cupiditate fugiat nemo.">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Adipisci ex ipsam vel.</ListGroupItem>
                                <ListGroupItem href="#" header="A asperiores magni rerum?">Lorem ipsum dolor
                                    sit.</ListGroupItem>
                                <ListGroupItem href="#" header="Autem dolor inventore pariatur.">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Veniam!</ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}