import React, {Component} from 'react';
import {Container, TopNavbar} from "./Layout";
import base from '../base';

class App extends Component {
    componentDidMount() {
        base.syncState(`shoppingList`, {
            context: this,
            state: 'gists',
            asArray: true
        });
    }

    render() {
        return (
            <main>
                <TopNavbar/>
                <Container/>
            </main>
        );
    }
}

export default App;
