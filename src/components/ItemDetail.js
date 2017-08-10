import React, {Component} from 'react';
import {Button, ButtonGroup, ButtonToolbar, Label, Panel} from 'react-bootstrap';
import {reactLoading} from './../helpers';


class ItemDetail extends Component {

    render() {
        const {item, isLoading} = this.props;
        let content;

        if (isLoading) {
            return this.wrap(reactLoading());
        }
        if (item.length === 0) {
            return this.wrap(<div className="box-center">
                <h4>No item has been selected!.</h4>
                <ol className="list-unstyled">
                    <li>Select item from items list</li>
                </ol>
            </div>);

        }
        else if (item) {
            const files = item.files.map((file) => <Panel key={file.id} header={file.name}>{file.code}</Panel>);
            const labels = item.labels.map((label) => <Label key={label.id} bsStyle={label.color}>{label.name}</Label>);

            content = <div className="row">
                <div className="col-header col-xs-12">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-meta">
                        <div className="list-labels pull-left">{labels}</div>
                        <ButtonToolbar className="pull-right">
                            <ButtonGroup bsSize="xsmall">
                                <Button>
                                    <i className="glyphicon glyphicon-edit"/> Edit
                                </Button>
                                <Button onClick={() => this.removeItem(item.id)}>
                                    <i className="glyphicon glyphicon-remove"/> Delete
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
                <div className="col-body col-xs-12">
                    {files}
                </div>
            </div>;
            return this.wrap(content);
        }
    }

    wrap = (content) => {
        return <div className="col-xs-12 col-xs-push-0 col-md-7 col-md-push-5 col col-main-content">{content}</div>;
    };
}

export default ItemDetail;