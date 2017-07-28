import React, {Component} from 'react';
import {GistsList} from "./GistsList";
import {GistDetail} from "./GistDetail";
import {Sidebar} from "./Sidebar";
import {TopNavbar} from "./TopNavbar";

import items from '../data/gists';

class App extends Component {

    render() {

        let categories = [];

        for(let item of items){
            categories[item.category] = item.category;
        }

        const {params} = this.props.match;
        let categoryId = null;
        let activeItemId = null;

        if (params.categoryId) {
            categoryId = params.categoryId;
        }

        if (params.itemId) {
            activeItemId = parseInt(params.itemId);
        }

        const filteredItems = items.filter((item) => {
            return item.category === categoryId;
        });

        const activeItem = filteredItems.find((item, index) => {
            return item.id === activeItemId
        });
        return (
            <main>
                <TopNavbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <GistsList items={filteredItems} activeId={activeItemId}/>
                        <GistDetail item={activeItem}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
