import React, {Component} from 'react';
import {Button, ButtonGroup, ButtonToolbar, Label, Panel} from 'react-bootstrap';
import {reactLoading} from './../helpers';

class ItemDetail extends Component {

    render() {
        const {item, isLoading} = this.props;

        if (isLoading) {
            return this.wrap(reactLoading());
        }
        if (Object.keys(item).length === 0 && item.constructor === Object) {
            return this.wrap(this.renderNothingSelected());
        }
        else if (item) {
            const files = item.files.map((file) => <Panel key={file.id} header={file.name}>{file.code}</Panel>);
            const labels = item.labels.map((label) => <Label key={label.id} bsStyle={label.color}>{label.name}</Label>);

            return this.wrap(<div className="row">
                <div className="col-header col-xs-12">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-meta">
                        <div className="list-labels pull-left">{labels}</div>
                        <ButtonToolbar className="pull-right">
                            <ButtonGroup bsSize="xsmall">
                                <Button>
                                    <i className="glyphicon glyphicon-edit"/> Edit
                                </Button>
                                <Button onClick={() => this.props.removeItem(item.id)}>
                                    <i className="glyphicon glyphicon-remove"/> Delete
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
                <div className="col-body col-xs-12">
                    {files}
                </div>
            </div>);
        }
    }

    wrap = (content) => {
        return <div className="col-xs-12 col-xs-push-0 col-md-7 col-md-push-5 col col-main-content">{content}</div>;
    };

    renderNothingSelected = () => {
        return <div className="box-center">
            <h4>No item has been selected!.</h4>
            <ol className="list-unstyled">
                <li>Select item from items list</li>
            </ol>
        </div>;
    }

}

export default ItemDetail;