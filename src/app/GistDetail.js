import React, {Component} from 'react';
import {Panel, Label,ButtonToolbar,ButtonGroup,Button,Well} from 'react-bootstrap';
import Highlight from 'react-syntax-highlighter';
import Style from 'react-syntax-highlighter/src/styles/github-gist';

export class GistDetail extends Component {
    render() {
        const code = 'function createElement({ node, style, useInlineStyles, key }) {\
        const { properties, type, tagName, value } = node;\
        if (type === "text") {\
            return value;\
        } else if (tagName) {\
            const TagName = tagName;\
            const childrenCreator = createChildren(style, useInlineStyles);\
            const props = (\
                useInlineStyles\
                    ?\
                    { style: createStyleObject(properties.className, style) }\
                    :\
                    { className: createClassNameString(properties.className) }\
            );\
            const children = childrenCreator(node.children);\
            return &lt;TagName key={key} {...props}&gt;{children}&lt;/TagName&gt;;\
        }\
    }';
        return (
            <div className="col-xs-12 col-xs-push-0 col-md-7 col-md-push-5 col col-main-content">
                <div className="row">
                    <div className="col-header col-xs-12">
                        <h3 className="gist-name">Aspernatur cupiditate fugiat nemo.</h3>
                        <div className="gist-meta">
                            <div className="list-labels pull-left">
                                <Label bsStyle="default">Windows</Label>&nbsp;
                                <Label bsStyle="primary">PHP</Label>&nbsp;
                                <Label bsStyle="success">Javascript</Label>&nbsp;
                                <Label bsStyle="info">Work</Label>&nbsp;
                                <Label bsStyle="warning">Actum</Label>&nbsp;
                                <Label bsStyle="danger">TDD</Label>
                            </div>
                            <ButtonToolbar className="pull-right">
                                <ButtonGroup bsSize="xsmall">
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </div>
                    </div>
                    <div className="col-body col-xs-12">
                        <Well bsSize="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex ipsam vel.</Well>
                        <Panel header="Create Element function">
                            <Highlight language="javascript" style={Style} >{code}</Highlight>
                        </Panel>
                        <Panel header="Create Element function">
                            <Highlight language="javascript" style={Style} >{code}</Highlight>
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
}