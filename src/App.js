import React, { Component } from 'react';
import Board from './components/Board';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Board/>
                <h1 className="App__heading">Tic-Tac-Toe!</h1>
            </div>
        );
    }
}

export default App;
