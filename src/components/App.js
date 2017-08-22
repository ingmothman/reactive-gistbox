import React, {Component} from 'react';
import {preloaderStarted} from '../actionCreators/preloader';
import {connect} from 'react-redux';
// components
import List from "./items/List";
import ItemDetail from "./ItemDetail";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import PreLoader from "./PreLoader";

class App extends Component {

    componentWillMount() {
        this.props.preloaderStarted();
    }

    render() {
        const {preloader} = this.props;
        return (
            <main>
                <PreLoader {...preloader}/>
                <TopNavigation/>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>
                        <List/>
                        <ItemDetail/>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {preloader: state.preloader};
};
const mapDispatchToProps = {
    preloaderStarted,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);