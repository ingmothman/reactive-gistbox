import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import GistsListFilter from './GistsListFilter';
import axios from 'axios';
import shallowequal from 'shallowequal';
import ReactLoading from 'react-loading';


export class GistsList extends Component {
    constructor(props) {
        super(props);
        this.handleFilterChanged = this.handleFilterChanged.bind(this);
    }

    componentDidMount() {
        this.loadItems(this.state.filters);
    }

    static propTypes = {
        itemChanged: PropTypes.func.isRequired,
        activeItemId: PropTypes.number.isRequired,
    };

    state = {
        isLoading: true,
        items: undefined,
        filters: {_sort: 'created', _order: 'asc'}
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (!shallowequal(this.state.filters, nextState.filters)) {
            this.loadItems(nextState.filters);
        }
        return (shallowequal(this.props, nextProps) === false || shallowequal(this.state, nextState) === false);
    }

    loadItems(params = {}) {
        axios.get('http://localhost:9914/items', {params})
            .then((response) => {
                this.setState({
                    items: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    handleFilterChanged(filters) {
        this.setState({
            filters: filters
        });
    }


    static renderNotFound() {
        return <div className="box-center clear clearfix">
            <h4>No category has been selected!.</h4>
            <ol className="list-unstyled">
                <li>Select a category from categories list</li>
            </ol>
        </div>;
    }

    handleItemChanged = (e, value) => {
        e.preventDefault();
        this.props.itemChanged(value);
    };


    renderListItem(item) {
        const isActive = (this.props.activeItemId === item.id) ? 'active' : '';
        return (
            <Link className={`list-group-item ${isActive}`} key={item.id} to={`/${item.category}/${item.id}`}
                  onClick={(e) => {
                      this.handleItemChanged(e, item.id)
                  }}>
                <h4 className="list-group-item-heading">{item.name}</h4>
                <p className="list-group-item-text">{item.description}</p>
            </Link>
        );
    }

    render() {
        const {items, isLoading} = this.state;
        let content;

        if (items === undefined) {
            content = <ReactLoading delay={0}
                                    className="box-center sub-loader"
                                    type={'bubbles'}
                                    color={'#45aeea'}
                                    height={100}
                                    width={100}/>;
        }
        else if (items === []) {
            content = GistsList.renderNotFound();

        }
        else if (items && items.length) {
            content = <div className="col-body col-xs-12">
                <div className="row">
                    <div className="list-categories list-group">
                        {items.map((item) => this.renderListItem(item))}
                    </div>
                </div>
            </div>;
        }

        return (
            <div className="col-xs-12 col-xs-push-0 col-md-3 col-md-push-2 col col-secondary-sidebar">
                <div className="row">
                    <div className="col-header col-xs-12">
                        <GistsListFilter filterChanged={this.handleFilterChanged}/>
                    </div>
                    {content}
                </div>
            </div>
        );
    }
}