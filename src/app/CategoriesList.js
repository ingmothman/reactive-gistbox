import React, {Component} from 'react';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import {ButtonGroup, Button, ButtonToolbar, Glyphicon, ListGroup, ListGroupItem} from 'react-bootstrap';
import '../assets/CategoriesList.css';

const temp = <div className="split-view-list">
        <div className="split-view-filter-bar-container">
            <div className="filter-bar">
                <div className="btn-group" data-toggle="buttons-radio">
                    <button type="button" className="filter-all btn btn-small active">All</button>
                    <button type="button" className="filter-public btn btn-small ">Public</button>
                    <button type="button" className="filter-private btn btn-small ">Private</button>
                </div>
                <div className="filter-bar-sorter">
                    <a href="#" className="filter-active filter-by-created">
                        <i className="icon-arrow-down"/>
                        Created
                    </a>
                    <a href="#" className="filter-by-updated">Updated</a>
                </div>
            </div>
        </div>
        <div className="split-view-list-refresh-notice" style={{display: 'none'}}>
            Gists updated. Click to refresh.
            <i className="icon-refresh"/>
        </div>
        <div className="split-view-list-gists" style={{height: 296}}>
            <div className="split-gist ui-draggable gist-selected" data-id="1a91ea6a48d878f32c552e3f01638219">
                <div className="split-gist-grapple"/>
                <div className="split-gist-header">
                    <img src="https://avatars0.githubusercontent.com/u/1795294?v=4"/>
                    <div className="gist-meta">
                        <div className="gist-name">linux-commands.sh</div>
                        <span className="gist-created-updated">Created 3 days ago</span>
                    </div>
                    <div className="gist-flags">
                        <i className="icon-lock"/>
                    </div>
                </div>
                <div className="gist-description">
                    Linux Commands
                </div>
                <div className="gist-labels">
                    <i className="icon-tags"/>
                    <span className="gist-no-labels">No Labels</span>
                </div>
            </div>
            <div className="split-gist ui-draggable" data-id="ce60fd92f57427e31bd784fbdb9f2426">
                <div className="split-gist-grapple"/>
                <div className="split-gist-header">
                    <img src="https://avatars0.githubusercontent.com/u/1795294?v=4"/>
                    <div className="gist-meta">
                        <div className="gist-name">install-sequence.bat</div>
                        <span className="gist-created-updated">Created 4 months ago</span>
                    </div>
                    <div className="gist-flags">
                    </div>
                </div>
                <div className="gist-description">
                    batch file to install all the necessary packages on Windows
                </div>
                <div className="gist-labels">
                    <i className="icon-tags"/>
                    <span className="gist-label label-color-7">Important</span>
                </div>
            </div>
            <div className="split-gist ui-draggable" data-id="bd9d1d85f2e8fa32fe90b2c5e4f5f054">
                <div className="split-gist-grapple"/>
                <div className="split-gist-header">
                    <img src="https://avatars0.githubusercontent.com/u/1795294?v=4"/>
                    <div className="gist-meta">
                        <div className="gist-name">pre-commit</div>
                        <span className="gist-created-updated">Created 9 months ago</span>
                    </div>
                    <div className="gist-flags">
                    </div>
                </div>
                <div className="gist-description">
                    git: export mysql pre-hook
                </div>
                <div className="gist-labels">
                    <i className="icon-tags"/>
                    <span className="gist-no-labels">No Labels</span>
                </div>
            </div>
        </div>
    </div>
;

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
            <div className="col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-2 sidebar-secondary">
                {filtersButtonGroup}
                <ListGroup className="list-categories col-sm-3 col-md-3">
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
        );
    }
}