import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import GistsListFilter from './GistsListFilter';


export class GistsList extends Component {
    constructor(props) {
        super(props);
        this.handleFilterChanged = this.handleFilterChanged.bind(this);
    }

    static propTypes = {
        items: PropTypes.array.isRequired,
        filterChanged: PropTypes.func.isRequired,
        itemChanged: PropTypes.func.isRequired,
        activeItemId: PropTypes.number.isRequired,
    };

    handleFilterChanged(filters, order) {
        this.props.filterChanged(filters, order);
    }


    static renderNotFound() {
        return <div className="box-center clear clearfix">
            <h4>No category has been selected!.</h4>
            <ol className="list-unstyled">
                <li>Select a category from categories list</li>
            </ol>
        </div>;
    }


    renderListItem(item) {
        const isActive = (this.props.activeItemId === item.id) ? 'active' : '';
        return (
            <Link className={`list-group-item ${isActive}`} key={item.id} to={`/${item.category}/${item.id}`}>
                <h4 className="list-group-item-heading">{item.name}</h4>
                <p className="list-group-item-text">{item.description}</p>
            </Link>
        );
    }

    render() {
        const {items} = this.props;
        const content = items.length ? <div className="col-body col-xs-12">
            <div className="row">
                <div className="list-categories list-group">
                    {items.map((item) => this.renderListItem(item))}
                </div>
            </div>
        </div> : GistsList.renderNotFound();

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