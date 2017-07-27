import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GistsList} from "./GistsList";
import {GistDetail} from "./GistDetail";
import {Sidebar} from "./Sidebar";
import {TopNavbar} from "./TopNavbar";

import items from '../data/gists';

class App extends Component {

    render() {
        if(this.props.match.params.categoryId){
            console.log(this.props.match.params.categoryId);
        }
        else{
            console.log("not found");
        }
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
