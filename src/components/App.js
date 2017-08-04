import React, {Component} from 'react';
import {GistsList} from "./GistsList";
import {GistDetail} from "./GistDetail";
import {Sidebar} from "./Sidebar";
import {TopNavbar} from "./TopNavbar";

class App extends Component {

    constructor(props) {
        super(props);
        this.handleItemChanged = this.handleItemChanged.bind(this);
        this.handleCategoryChanged = this.handleCategoryChanged.bind(this);
    }

    state = {
        activeItemId: 0,
        activeCategoryId: '0',
    };

    handleItemChanged(value) {
        this.setState({
            activeItemId: value
        });
        this.forceUpdate();
    }

    handleCategoryChanged(value) {
        this.setState({
            activeCategoryId: value
        });
        this.forceUpdate();
    }

    render() {
        return (
            <main>
                <TopNavbar/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar categoryChanged={this.handleCategoryChanged}
                                 activeCategoryId={this.state.activeCategoryId}
                        />
                        <GistsList itemChanged={this.handleItemChanged}
                                   activeItemId={this.state.activeItemId}
                                   activeCategoryId={this.state.activeCategoryId}
                        />
                        <GistDetail itemChanged={this.handleItemChanged}
                                    activeItemId={this.state.activeItemId}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
