import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: Array(9).fill(null),
            playerTurn: 'X'
        };
    }

    assignCell(index) {}

    render() {
        return (
            <article className="Game">
                <Board/>
            </article>
        );
    }
}
