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
            <div className="Game">
                <Board
                    cells={this.state.cells}
                    onClick={(index) => this.assignCell(index)}
                />
            </div>
        );
    }
}
