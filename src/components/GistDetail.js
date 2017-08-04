import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Panel, Label, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import axios from 'axios';
import ReactLoading from 'react-loading';

export class GistDetail extends Component {
    static propTypes = {
        activeItemId: PropTypes.number.isRequired,
    };

    state = {
        item: undefined,
        isLoading: false
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.activeItemId !== nextProps.activeItemId) {
            this.setState({
                isLoading: true,
            });
            this.loadItem(nextProps.activeItemId);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isLoading === true) {
            this.setState({
                isLoading: false,
            });
        }
    }

    loadItem(id) {
        axios.get(`http://localhost:9914/items/${id}`)
            .then((response) => {
                this.setState({
                    item: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        const {item, isLoading} = this.state;
        let content;

        if (isLoading) {
            content = <ReactLoading delay={0}
                                    className="box-center sub-loader"
                                    type={'bubbles'}
                                    color={'#45aeea'}
                                    height={100}
                                    width={100}/>;
        }
        else if (item === undefined || item === {}) {
            content = <div className="box-center">
                <h4>No item has been selected!.</h4>
                <ol className="list-unstyled">
                    <li>Select item from items list</li>
                </ol>
            </div>;
        }
        else if (item) {
            const files = item.files.map((file) => <Panel key={file.id} header={file.name}>{file.code}</Panel>);
            const labels = item.labels.map((label) => <Label key={label.id} bsStyle={label.color}>{label.name}</Label>);

            content = <div className="row">
                <div className="col-header col-xs-12">
                    <h3 className="gist-name">{item.name}</h3>
                    <div className="gist-meta">
                        <div className="list-labels pull-left">{labels}</div>
                        <ButtonToolbar className="pull-right">
                            <ButtonGroup bsSize="xsmall">
                                <Button><i className="glyphicon glyphicon-edit"></i> Edit</Button>
                                <Button><i className="glyphicon glyphicon-remove"></i> Delete</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
                <div className="col-body col-xs-12">
                    {files}
                </div>
            </div>
        }


        return (
            <div className="col-xs-12 col-xs-push-0 col-md-7 col-md-push-5 col col-main-content">{content}</div>
        );

    }
}