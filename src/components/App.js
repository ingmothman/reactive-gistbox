import React, {Component} from 'react';
import {GistsList} from "./GistsList";
import {GistDetail} from "./GistDetail";
import {Sidebar} from "./Sidebar";
import {TopNavbar} from "./TopNavbar";

import items from '../data/gists';

class App extends Component {
    render() {
        const activeId = 2;
        const activeItem = items.find((item) => {
            return item.id === activeId
        });
        return (
            <main>
                <TopNavbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <GistsList items={items} activeId={activeId}/>
                        <GistDetail item={activeItem} />
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
