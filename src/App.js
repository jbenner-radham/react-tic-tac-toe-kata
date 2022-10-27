import React, { Component } from 'react';
import Game from './components/Game';
import './App.scss';

class App extends Component {
    render() {
        return (
            <main className="App">
                <Game/>
                <h1 className="App__heading">Tic-Tac-Toe!</h1>
            </main>
        );
    }
}

export default App;
