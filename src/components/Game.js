import React from 'react';
import Board from './Board';
import './Game.scss';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: Array(9).fill(null),
            history: [{ cells: Array(9).fill(null) }],
            message: `X's turn.`,
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

        const winner = this.getWinner(cells);
        const message = winner
            ? `${winner} wins!`
            : `${nextPlayerTurn}'s turn.`;

        this.setState({
            history: [...history, { cells }],
            message,
            playerTurn: nextPlayerTurn
        });
    }

    getWinner(cells) {
        const winAxes = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const xWon = winAxes.reduce((accumulator, axis) => (
            accumulator
                ? accumulator
                : axis.every(index => cells[index] === 'X')
        ), false);

        if (xWon) {
            return 'X';
        }

        const oWon = winAxes.reduce((accumulator, axis) => (
            accumulator
                ? accumulator
                : axis.every(index => cells[index] === 'O')
        ), false);

        if (oWon) {
            return 'O';
        }

        return false;
    }

    isATie(cells) {
        if (this.getWinner(cells)) {
            return false;
        }
    }

    render() {
        const { history } = this.state;
        const current = history[history.length - 1];

        return (
            <div className="Game">
                <p className="Game__message">{this.state.message}</p>
                <Board
                    cells={current.cells}
                    onClick={(index) => this.assignCell(index)}
                />
            </div>
        );
    }
}
