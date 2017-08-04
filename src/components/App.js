import React, {Component} from 'react';
import GistsList from "./GistsList";
import GistDetail from "./GistDetail";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";

export default class App extends Component {

    state = {
        activeItemId: 0,
        activeCategoryId: '0',
    };

    handleItemChanged = (value) => {
        this.setState({
            activeItemId: value
        });
        this.forceUpdate();
    };

    handleCategoryChanged = (value) => {
        this.setState({
            activeCategoryId: value
        });
        this.forceUpdate();
    };

    render() {
        return (
            <main>
                <TopNavigation/>
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