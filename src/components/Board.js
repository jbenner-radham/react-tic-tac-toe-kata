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
                    <Cell className="Board__cell--top-left"/>
                    <Cell className="Board__cell--top-middle"/>
                    <Cell className="Board__cell--top-right"/>
                </div>
                <div className="Board__row">
                    <Cell className="Board__cell--middle-left"/>
                    <Cell className="Board__cell--middle-middle"/>
                    <Cell className="Board__cell--middle-right"/>
                </div>
                <div className="Board__row">
                    <Cell className="Board__cell--bottom-left"/>
                    <Cell className="Board__cell--bottom-middle"/>
                    <Cell className="Board__cell--bottom-right"/>
                </div>
            </div>
        );
    }
}
