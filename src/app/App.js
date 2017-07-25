import React, {Component} from 'react';
import {Container, TopNavbar} from "./Layout";

class App extends Component {
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
