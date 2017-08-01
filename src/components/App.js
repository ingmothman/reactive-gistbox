import React, {Component} from 'react';
import {GistsList} from "./GistsList";
import {GistDetail} from "./GistDetail";
import {Sidebar} from "./Sidebar";
import {TopNavbar} from "./TopNavbar";

class App extends Component {

    constructor(props) {
        super(props);
        this.handleItemChanged = this.handleItemChanged.bind(this);
    }

    state = {
        activeItem: null,
        activeItemId: 0,
    };


    handleItemChanged(value) {
        this.setState({
            activeItemId: value
        });
    }

    render() {
        return (
            <main>
                <TopNavbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <GistsList itemChanged={this.handleItemChanged}
                                   activeItemId={this.state.activeItemId}/>
                        <GistDetail activeItemId={this.state.activeItemId}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
