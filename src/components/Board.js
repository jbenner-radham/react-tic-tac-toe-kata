import React from 'react';
import Cell from './Cell';
import './Board.scss';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: Array(9).fill(null),
            playerTurn: 'X'
        };
    }

    renderCell(index) {
        return (
            <Cell
                value={this.state.cells[index]}
                onClick={() => this.takeCell(index)}
            />
        );
    }

    takeCell(index) {
        const cells = [...this.state.cells];
        const { playerTurn } = this.state;
        const nextPlayerTurn = playerTurn === 'X' ? 'O' : 'X';

        cells[index] = playerTurn;

        this.setState({
            cells,
            playerTurn: nextPlayerTurn
        });
    }

    render() {
        return (
            <div className="Board">
                <div className="Board__row">
                    {this.renderCell(0)}
                    {this.renderCell(1)}
                    {this.renderCell(2)}
                </div>
                <div className="Board__row">
                    {this.renderCell(3)}
                    {this.renderCell(4)}
                    {this.renderCell(5)}
                </div>
                <div className="Board__row">
                    {this.renderCell(6)}
                    {this.renderCell(7)}
                    {this.renderCell(8)}
                </div>
            </div>
        );
    }
}
