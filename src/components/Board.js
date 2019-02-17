import React from 'react';
import Cell from './Cell';
import './Board.scss';

export default class Board extends React.Component {
    renderCell(index) {
        const cells = this.props.cells || Array(9).fill(null);

        return (
            <Cell
                value={cells[index]}
                onClick={() => this.props.onClick(index)}
            />
        );
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
