import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: Array(9).fill(null),
            history: [{ cells: Array(9).fill(null) }],
            playerTurn: 'X'
        };
    }

    assignCell(index) {
        const { history } = this.state;
        const current = history[history.length - 1];
        const cells = [...current.cells];
        const { playerTurn } = this.state;
        const nextPlayerTurn = playerTurn === 'X' ? 'O' : 'X';

        cells[index] = playerTurn;

        this.setState({
            history: [...history, { cells }],
            playerTurn: nextPlayerTurn
        });
    }

    isGameDone() {

    }

    render() {
        const { history } = this.state;
        const current = history[history.length - 1];

        return (
            <div className="Game">
                <Board
                    cells={current.cells}
                    onClick={(index) => this.assignCell(index)}
                />
            </div>
        );
    }
}
